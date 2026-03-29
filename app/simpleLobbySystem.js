const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io")

const { Game, GAME_STATES } = require("./game/game")
const { LobbyStore } = require("./lobby-system/lobbyStore")

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, resp)=>{
    resp.sendFile(path.join(__dirname, "public", "index.html"));
});

function updateLobby(io, socket, lobbyId) {
    const result = LobbyStore.getLobby(lobbyId);
    if (result) {
        const {hostId, players} = result
        io.to(lobbyId).emit("lobby:updated", {hostId, players, lobbyId} )
    } else {
        io.to(lobbyId).emit("lobby:kicked", {reasonMessage : "host left"} )
        io.socketsLeave("lobbyId");
    }
}


function leaveLobby(io, socket, lobbyId, reasonMessage) {
    LobbyStore.leaveLobby(lobbyId, socket.id);
    socket.emit("lobby:kicked", {reasonMessage});
    socket.leave(lobbyId)
}

function createLobby(io, socket, lobbyId) {

}

io.on("connection", (socket)=>{
    console.log("User connect")
    const socketId = socket.id;
    let currentLobbyId = null;
    // change all to socket.rooms
    // socket.rooms.values[0];

    socket.on("lobby:create", ()=>{
        // Leave current lobby
        if (currentLobbyId) {
            leaveLobby(io, socket, currentLobbyId, "Created a new lobby");
            updateLobby(io, socket, currentLobbyId);
            currentLobbyId = null;
        }
        
        // Create new lobby
        currentLobbyId = LobbyStore.createLobby(socketId);

        // Get lobby Info
        const { hostId, players } = LobbyStore.getLobby(currentLobbyId);

        // Add user to room
        socket.join(currentLobbyId);

        // NOTE: on the client, needs to start "Lobby scene" with these params
        socket.emit("lobby:created", {currentLobbyId, hostId, players});
    })

    socket.on("lobby:join", (lobbyId)=>{
        // Leave current lobby
        if (currentLobbyId) {
            leaveLobby(io, socket, currentLobbyId, "Joined a new lobby");
            updateLobby(io, socket, currentLobbyId);
            currentLobbyId = null;
        }

        // Attempt to join lobby
        const success = LobbyStore.joinLobby(lobbyId, socketId);

        // On success
        if (success) {
            
            // Get lobby Info
            const { hostId, players } = LobbyStore.getLobby(lobbyId);

            // Set current lobby
            currentLobbyId = lobbyId;

            // NOTE: on the client, needs to start "Lobby scene" with these params
            socket.emit("lobby:joined", {currentLobbyId, hostId, players});

            // Add user to room
            socket.join(lobbyId);

            // Send to everyone else
            socket.to(lobbyId).emit("lobby:updated", {hostId, players, currentLobbyId} );  
        } else {
            socket.emit("lobby:failed", {reasonMessage : "full"})
        }
    })

    socket.on("lobby:leave", ()=> {
        if (currentLobbyId) {
            leaveLobby(io, socket, currentLobbyId, "Left");
            updateLobby(io, socket, currentLobbyId);
            currentLobbyId = null;
        }
    })

    /* -------------------------------------------------------------------------- */
    /*                                 Game Events                                */
    /* -------------------------------------------------------------------------- */

    socket.on("game:start", async () => {
        // Get all clients
        const lobby = LobbyStore.getLobby(currentLobbyId);
        if (!lobby) return;

        if (lobby.hostId !== socketId) return;

        const sockets = await io.in(currentLobbyId).fetchSockets();

        lobby.game.advanceGameState();
        lobby.game.advanceGameState();

        // Set game state to prep
        // Deal cards
        // for Players, send 
        for (const clientSocket of sockets) {
            clientSocket.emit("game:started");
        }

        
        
    })


    socket.on("game:ready", () => {

        const lobby = LobbyStore.getLobby(currentLobbyId);
        lobby.hostId
        if (!lobby) return;

        lobby.readyPlayers.add(socketId);

        if (lobby.readyPlayers.size === lobby.players.length) {
            socket.to(currentLobbyId).emit("game:turnEnded");
            const result = lobby.game.startTurn(socketId);
            socket.emit("game:turnStarted", result);
        }

    })
    
    socket.on("game:playPower", (cardKey, amalgamationIndex)=>{

        // // Verify data.

        // If the cardKey is not a number, return.
        if (typeof cardKey !== "number") return;

        // If the amalgamationIndex is a number from 1 to 3,
        if (typeof amalgamationIndex !== "number" || amalgamationIndex < 0 || amalgamationIndex > 2) return;

        // If the lobby does not exist,
        const lobby = LobbyStore.getLobby(currentLobbyId);
        if (!lobby) return;

        // Game state / turn check
        const gs = lobby.game.getGameState();
        if (gs != GAME_STATES.PREPARATION && gs != GAME_STATES.STANDARDPLAY) return;

        // // Play.
        const result = lobby.game.playPower(socketId, amalgamationIndex, cardKey);

        // Opponent play power emit for other players
        socket.to(currentLobbyId).emit("game:opponentPlayedPower", result);

    });

    socket.on("game:playDefense", (cardKey, amalgamationIndex)=>{

        // // Verify data.

        // if it is socket's turn

        // If the cardKey is not a number, return.
        if (typeof cardKey !== "number") return;

        // If the amalgamationIndex is a number from 1 to 3,
        if (typeof amalgamationIndex !== "number" || amalgamationIndex < 0  || amalgamationIndex > 2) return;

        // If the lobby does not exist,
        const lobby = LobbyStore.getLobby(currentLobbyId);
        if (!lobby) return;
        // Game state / turn check
        const gs = lobby.game.getGameState();
        if (gs != GAME_STATES.PREPARATION && gs != GAME_STATES.STANDARDPLAY) return;
        // Play.
        const result = lobby.game.playDefense(socketId, amalgamationIndex, cardKey);
        // Opponent play defense emit for other players
        // hide card
        result.cardInfo.card.energy = null;
        result.cardInfo.card.power = null;
        result.cardInfo.card.defense = null;
        result.cardInfo.card.defense = null;
        console.log(result);
        socket.to(currentLobbyId).emit("game:opponentPlayedDefense", result);

    });

    socket.on("game:playEnergy", (cardKey)=>{

        // // Verify data.

        // If the cardKey is not a number, return.
        if (typeof cardKey !== "number") return;
 
        // If the lobby does not exist,
        const lobby = LobbyStore.getLobby(currentLobbyId);
        if (!lobby) return;

        // Game state / turn check
        const gs = lobby.game.getGameState();
        if (gs != GAME_STATES.STANDARDPLAY) return;
        
        // Play.
        const result = lobby.game.playEnergy(socketId, cardKey);
        
        // Opponent play defense emit for other players
        socket.to(currentLobbyId).emit("game:opponentPlayedEnergy", result);

    });

    // TO:DO
    socket.on("game:useAmalgamation", (allyIndex, enemyIndex, selection)=>{
        // Game state check
            // Only do on X game state
        if (selection.length === 0) return;

        // If the lobby does not exist,
        const lobby = LobbyStore.getLobby(currentLobbyId);
        if (!lobby) return;
        // Game state / turn check
        // const gs = lobby.game.getGameState();
        // if (gs != GAME_STATES.STANDARDPLAY) return;
        // Play.

        // under the assumption there is only one other player
        const otherPlayerArray = lobby.players.filter((p)=>(p !== socketId))

        // something went really wrong
        if (otherPlayerArray.length <= 0) return;

        const result = lobby.game.useAmalgamation(socketId, otherPlayerArray[0], allyIndex, enemyIndex, selection);

        io.to(currentLobbyId).emit("game:amalgamationUsed", result);
    });

    // TO:DO
    socket.on("game:endTurn", () => {

        const lobby = LobbyStore.getLobby(currentLobbyId);

        if (!lobby) return;

        // TO:DO : Game state / turn check
        const otherSocketId = lobby.game.alternateTurn();
        if (!otherSocketId) return;
        const result = lobby.game.startTurn(otherSocketId);
        
        lobby.game.endTurn(socketId);
        // TO:DO : Check result

        socket.to(currentLobbyId).emit("game:turnStarted", result)

        // check states

        // Swap players
        // emit game:turnStarted
        // emit game:turnEnded
    })

    // TO:DO : handle more leave cases
    socket.on('disconnect', () => {
        console.log('User disconnected');
        if (currentLobbyId) {
            leaveLobby(io, socket, currentLobbyId, "Left");
            updateLobby(io, socket, currentLobbyId);
            currentLobbyId = null;
        }
    });

});

server.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})
