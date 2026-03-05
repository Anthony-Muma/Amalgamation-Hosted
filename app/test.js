const {cardFactory} = require("./game/card.js");
const {Amalgamation} = require("./game/amalgamation.js")
const {Player} = require("./game/player.js")
const {Game} = require("./game/game.js")
const {LobbyStore} = require("./lobby-system/lobbyStore.js")


// console.log(card.getAttackValue());

// const card = cardFactory("test", "material");
// const ama = new Amalgamation();
// ama.addDefense(card);
// let remainingAttack = 20
// while (remainingAttack > 0) {
//     returnedObject = ama.damageIteration(remainingAttack);
//     console.log(returnedObject)
//     remainingAttack = returnedObject.remainingAttack;
// }

// const player = new Player();
// for (let i = 0; i < 10; i++) {
//     const card = cardFactory("log", "material");
//     player.addToPersonalDeck(card)
// }

// player.debugPersonalDeck();

// for (let i = 0; i < 11; i++) {
//     console.log(player.drawFromPersonalDeck());
// }

// const game = new Game();
// const [player1, player2] = game.getPlayers();
// for (let i = 0; i < 10; i++) {
//     const card = cardFactory("test", "material");
//     player1.addToPersonalDeck(card);
//     player2.drawFromExternal(card);
// }

// for (let i = 0; i < 11; i++) {
//     player1.drawFromPersonalDeck();
// }

// for (let i = 0; i < 10; i++) {
//     const card = cardFactory("log", "material");
//     player1.drawFromExternal(card);

// }

// player1.debugHand();
// player1.playDefense(1,0);
// player1.playDefense(2,0);
// player1.playDefense(11,0);
// player1.debugAma(0);

// player2.playEnergy(1);
// player2.playEnergy(2);
// player2.playEnergy(3);
// player2.playEnergy(4);

// player2.playPower(5,0);
// player2.playPower(6,0);
// player2.playPower(7,0);
// player2.playPower(8,0);
// // // player2.debugAma(0);

// console.log(game.useAmalgamation(1,0,0,0,[0,1,2]))

// const game = new Game();
// const [player1, player2] = game.getPlayers();
// game.startTurn(0);
// console.log(game.playPower(0, 0, 5));
// console.log(game.playDefense(0, 0, 4));
// console.log(game.playDefense(0, 0, 3));
// player1.debugHand();
// player1.debugAma(0);

// game.startTurn(1);
// console.log(game.playPower(1, 0, 4));
// console.log(game.playPower(1, 0, 3));
// console.log(game.playEnergy(1, 2));
// // console.log(game.playEnergy(1, 1));
// console.log(game.useAmalgamation(1, 0, 0, 0, [0]))

// console.log(typeof LobbyStore);
// const lobbyId = LobbyStore.createLobby("A");
// const lobby = LobbyStore.getLobby(lobbyId);
// console.log(lobby.toString());
// LobbyStore.joinLobby(lobbyId, "B");
// console.log(lobby.toString());
// LobbyStore.leaveLobby(lobbyId, "B");
// console.log(lobby.toString());
// LobbyStore.joinLobby(lobbyId, "C");
// console.log(lobby.toString());
// LobbyStore.leaveLobby(lobbyId, "A");
// console.log(LobbyStore.getLobby(lobbyId));

const player1SocketId = "A"
const player2SocketId = "B"
const game = new Game();

game.addPlayer(player1SocketId);
game.addPlayer(player2SocketId);

game.startTurn(player1SocketId);

game.playPower(player1SocketId, 0, 0);
game.playPower(player1SocketId, 0, 1);
game.playEnergy(player1SocketId, 2);
game.playEnergy(player1SocketId, 3);

game.useAmalgamation(player1SocketId, player2SocketId, 0, 0, [0,1])

game.endTurn(player1SocketId);
game.startTurn(player2SocketId);



// So on...

console.log(game.getPlayers())

// game.removePlayer(player1SocketId);
// console.log(game.getPlayers());
// console.log(game.getPlayers().get(player2SocketId).drawFromPersonalDeck().card.getAll());
console.log(game.startTurn(player1SocketId));

game.startTurn(player2SocketId);

game.playPower(player2SocketId, 0, 0);
game.playPower(player2SocketId, 0, 1);
game.playEnergy(player2SocketId, 2);
game.playEnergy(player2SocketId, 3);

game.playDefense(player1SocketId, 0, 0);
game.playDefense(player1SocketId, 0, 2);

console.log(game.useAmalgamation(player2SocketId, player1SocketId, 0, 0, []))




// Async gameplay