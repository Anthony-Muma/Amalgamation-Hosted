// Required
const { Game } = require("./../server-side-game/game");
const { randomUUID } = require("crypto");

// Internal variables
const lobbies = new Map();
// lobbyId -> { hostId: string, players: [playerSocketId: string], Game }
// Lobby.players[0] is the one and only host.

// Configurable variables
const MAX_PLAYERS = 2;

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
        players: [hostSocketId],
        game: new Game()
    });

    // Return
    return lobbyId;

}

/**
 * Adds a player to an existing lobby.
 * @param {string} lobbyId The lobbyId of the lobby to join
 * @param {socketId} The socketId of the player connecting to the lobby.
 * @returns boolean Whether the player successfully joined the lobby or not. Will fail if the lobby doesn't exist.
 */
function joinLobby(lobbyId, socketId) {

    // Initialize
    let success = true;
    let message = "You're in.";

    // Get the lobby
    const lobby = lobbies.get(lobbyId);

    // If the lobby exists,
    if (lobby) {

        // If the lobby is not full,
        if (lobby.players.length < MAX_PLAYERS) {

            // If the lobby does not have the socketId already,
            if (!lobby.players.includes(socketId)) {

                // Add the socketId to the lobby's players.
                lobby.players.push(socketId);

            }
            else {

                // Fail.
                success = false;
                message = "You're already in the lobby...?";

            }

        }
        else {

            // Fail.
            success = false;
            message = "Lobby is full.";

        }

    }
    else {

        // Fail.
        success = false;
        message = "Lobby doesn't exist.";

    }

    // Return
    return success;

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

