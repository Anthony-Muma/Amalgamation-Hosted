const socket = io();

function updatePlayerList(players) {
    const playerList = document.querySelector("#lobby-player-list");
    playerList.innerHTML = "";

    for (let player of players) {
        const li = document.createElement("li");
        li.dataset.id = player;
        li.textContent = player;
        playerList.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let socketId = null

/* -------------------------------------------------------------------------- */
/* Dom stuff
/* -------------------------------------------------------------------------- */

    const mainMenu = document.querySelector("#main-menu");
    const createLobbyButton = document.querySelector("#create-lobby-button");
    const toJoinLobbyScreen = document.querySelector("#to-join-lobby-screen");

    const lobby = document.querySelector("#lobby");
    const lobbyPlayerList = document.querySelector("#lobby-player-list");
    const lobbyCode = document.querySelector("#lobby-code");
    const leaveLobbyButton = document.querySelector("#leave-lobby-button");

    const join = document.querySelector("#join");
    const lobbyCodeTextbox = document.querySelector("#lobby-code-textbox");
    const joinLobbyButton = document.querySelector("#join-lobby-button");
    const backButton = document.querySelector("#back-button");

    lobby.style.display = "none";
    join.style.display = "none";

    socket.on('connect', () => {
        console.log('Connected to server');
        socketId = socket.id;
    });

/* -------------------------------------------------------------------------- */
/* On Lobby events
/* -------------------------------------------------------------------------- */

    socket.on("lobby:created", (lobbyInfo)=>{
        /*
            // NOTE: on the client, needs to start "Lobby scene" with these params {hostId, players, currentLobbyId}
        */

        // Mimic scene swap
        mainMenu.style.display = "none";
        lobby.style.display = "block";
        join.style.display = "none";

        const code = document.querySelector("#lobby-code");
        code.textContent = lobbyInfo.currentLobbyId;

        updatePlayerList(lobbyInfo.players);
    });

    socket.on("lobby:updated", (lobbyInfo)=>{
        // No need to swap scenes
        console.log(lobbyInfo);
        updatePlayerList(lobbyInfo.players);
    });

    socket.on("lobby:joined", (lobbyInfo)=>{
        /*
            // NOTE: on the client, needs to start "Lobby scene" with these params {hostId, players, currentLobbyId}
        */

        // Mimic scene swap
        mainMenu.style.display = "none";
        lobby.style.display = "block";
        join.style.display = "none";

        console.log(lobbyInfo);
        const code = document.querySelector("#lobby-code");
        code.textContent = lobbyInfo.currentLobbyId;

        updatePlayerList(lobbyInfo.players);
    })

    socket.on("lobby:kicked", (data)=>{
        /*
            // NOTE: on the client, needs to start "Main menu" with these params {reasonMessage}
            // NOTE: on normal leave (Not socket driven), start "Main menu" {reasonMessage : "left lobby"} *** add somewhere
        */

        // Mimic scene swap
        mainMenu.style.display = "block";
        lobby.style.display = "none";
        join.style.display = "none";

        alert(data.reasonMessage);
    })

    socket.on("lobby:failed", (data)=>{

        alert(data.reasonMessage);
    })

/* -------------------------------------------------------------------------- */
/* Emit lobby events
/* -------------------------------------------------------------------------- */

    toJoinLobbyScreen.addEventListener("click", (e)=>{
        // Swap scene
        lobby.style.display = "none";
        join.style.display = "block";
        mainMenu.style.display = "none";
    });

    joinLobbyButton.addEventListener("click", (e)=>{
        // Request to join lobby
        const code = lobbyCodeTextbox.value.toUpperCase();
        socket.emit("lobby:join", code)
    })

    createLobbyButton.addEventListener("click", (e)=>{
        // Request to create lobby
        socket.emit("lobby:create");
    })

    leaveLobbyButton.addEventListener("click", ()=>{
        lobby.style.display = "none";
        join.style.display = "none";
        mainMenu.style.display = "block";
        socket.emit("lobby:leave");
    })

    socket.on("disconnect", (reason) => {
        alert("Disconnect!");
        mainMenu.style.display = "block";
        lobby.style.display = "none";
        join.style.display = "none";
    })
    
});