// Required
const { Game } = require("../game/game");
const { randomUUID } = require("crypto");

// Internal variables
/** @type {Map<String, { hostId: string, players: string[], game : Game }} */
const lobbies = new Map();
// lobbyId -> { hostId: string, players: [playerSocketId: string], Game }
// Lobby.players[0] is the one and only host.

// Configurable variables
const MAX_PLAYERS = 2;

// Functions
function generateLobbyCode() {
    return randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
}

// Classes
class LobbyStore {

/**
 * Creates a lobby and stores it, ready for others to connect to.
 * @param {string} hostSocketId 
 * @returns string The lobbyId of the created lobby
 */
static createLobby(hostSocketId) {

    // Create the lobbyId
    const lobbyId = generateLobbyCode();

    // Create the Game object
    const game = new Game();
    game.addPlayer(hostSocketId);

    // Create the lobby object and store it.
    lobbies.set(lobbyId, {
        hostId: hostSocketId,
        players: [hostSocketId],
        game: game,
        toString() {
            return JSON.stringify({
                hostId: this.hostId,
                players: this.players,
                game: this.game
            });
        }
    });

    // Return
    return lobbyId;

}

/**
 * Adds a player to an existing lobby.
 * @param {string} lobbyId The lobbyId of the lobby to join
 * @param {string} socketId The socketId of the player connecting to the lobby.
 * @returns boolean True if the player successfully joined the lobby. False if the lobby doesn't exist.
 */
static joinLobby(lobbyId, socketId) {

    // Initialize
    let success = true;
    let message = "You're in.";

    // Get the lobby
    const lobby = lobbies.get(lobbyId);
    

    // If the lobby exists,
    if (lobby) {

        // Get game
        const game = lobby.game;

        // If the lobby is not full,
        if (lobby.players.length < MAX_PLAYERS) {

            // If the lobby does not have the socketId already,
            if (!lobby.players.includes(socketId)) {

                // Add the socketId to the lobby's players.
                lobby.players.push(socketId);
                game.addPlayer(socketId);

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

/**
 * Removes a player from a lobby. If the host leaves, the lobby is removed and all other players are kicked out.
 * @param {string} lobbyId The lobbyId of the lobby to leave.
 * @param {string} socketId The socketId of the player leaving the lobby.
 * @returns boolean True if the player successfully left the lobby. False if the lobby doesn't exist or if the player is not in the lobby.
 */
static leaveLobby(lobbyId, socketId) {

    // Initialize
    let success = true;
    let message = "You left the lobby.";

    // Get the lobby
    const lobby = lobbies.get(lobbyId);

    // If the lobby exists, 
    if (lobby) {

        // Get game
        const game = lobby.game;

        // If the player is in the lobby,
        if (lobby.players.includes(socketId)) {

            // If this is the host,
            if (lobby.hostId === socketId) {

                // Remove the lobby.
                lobbies.delete(lobbyId);

            }
            // Otherwise, if this is not the host,
            else {

                // Remove the socketId from the lobby's players.
                lobby.players = lobby.players.filter(si => si !== socketId);
                game.removePlayer(socketId);

            }

        }
        else {

            // Fail.
            success = false;
            message = "You're not in the lobby.";

        }

    }
    else {

        // Fail.
        success = false;
        message = "Lobby doesn't exist...?";

    }

    // Return
    return success;

}

static getLobby(lobbyId) {
    return lobbies.get(lobbyId);
}

}

// Exports
module.exports = {
    LobbyStore
}

