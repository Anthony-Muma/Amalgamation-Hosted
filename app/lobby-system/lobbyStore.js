const { randomUUID } = require("crypto")

// In memory
const lobbies = new Map();

function generateLobbyCode() {
    return randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
}

function createLobby(socketId)