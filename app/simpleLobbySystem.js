const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io")

const { Game } = require("./game/game")
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
        if (!currentLobbyId) return;

        const sockets = await io.in(currentLobbyId).fetchSockets()

        // Set game state to prep
        // Deal cards
        // for Players, send 
        for (const clientSocket of sockets) {
            clientSocket.emit("game:started");
        }
        
    })

    socket.on("game:ready", () => {
        // check st

    })
    
    socket.on("game:playPower", (cardKey, amalgamationIndex)=>{
        // Game state check
            // 
        const lobby = LobbyStore.getLobby(currentLobbyId);
        const result = lobby.game.playPower(socketId, amalgamationIndex, cardKey)
        // Opponent play defense emit for other players
        // emit game:opponentPlayedPower
        socket.broadcast.to(currentLobbyId).emit("game:opponentPlayedPower", result)
    });

    socket.on("game:playDefense", (cardKey, amalgamationIndex)=>{
        // Game state check
            // 
        
        // Opponent play defense emit for other players
        // emit game:opponentPlayedDefense
    });

    socket.on("game:playEnergy", (cardKey)=>{
        // Game state check
            // Only do on X game state

        
        // Opponent play energy emit for other players
        // emit game:opponentPlayedEnergy
    });

    socket.on("game:useAmalgamation", ()=>{
        // Game state check
            // Only do on X game state

        
        // Opponent play energy emit for other players
        
    });

    socket.on("game:endTurn", () => {
        // check states

        // Swap players
        // emit game:turnStarted
    })

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
