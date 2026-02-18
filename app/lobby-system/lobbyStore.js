const { randomUUID } = require("crypto")

// In memory
const lobbies = new Map();
// lobbyId -> { hostId: string, players: Set<socketId>, Game }

function generateLobbyCode() {
    return randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
}

function createLobby(hostSocketId) {

}

function joinLobby(lobbyId, socketId) {

}

function leaveLobby(lobbyId, socketId) {

}

function getLobby(lobbyId) {
  return lobbies.get(lobbyId);
}

module.exports = {
   createLobby,
   joinLobby,
   leaveLobby,
   getLobby
}

