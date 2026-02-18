// Required
const { Game } = require("./../server-side-game/game");
const { randomUUID } = require("crypto");

// Internal variables
const lobbies = new Map();
// lobbyId -> { hostId: string, players: Set<socketId>, Game }

function generateLobbyCode() {
    return randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
}

/**
 * Creates a lobby and stores it, ready for others to connect to.
 * @param {string} hostSocketId 
 * @returns lobbyId The lobbyId of the created lobby
 */
function createLobby(hostSocketId) {

    // Create the lobbyId
    const lobbyId = generateLobbyCode();

    // Create the lobby object and store it.
    lobbies.set(lobbyId, {
        hostId: hostSocketId,
        players: new Set([hostSocketId]),
        game: new Game()
    });

    // Return
    return lobbyId;

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

