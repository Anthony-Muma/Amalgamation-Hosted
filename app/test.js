const {cardFactory} = require("./server-side-game/card.js");
const {Amalgamation} = require("./server-side-game/amalgamation.js")
const {Player} = require("./server-side-game/player.js")
const {Game} = require("./server-side-game/game.js")


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

const game = new Game();
const [player1, player2] = game.getPlayers();
game.startTurn(0);
console.log(game.playPower(0, 0, 5));
console.log(game.playDefense(0, 0, 4));
console.log(game.playDefense(0, 0, 3));
player1.debugHand();
player1.debugAma(0);

game.startTurn(1);
console.log(game.playPower(1, 0, 4));
console.log(game.playPower(1, 0, 3));
console.log(game.playEnergy(1, 2));
// console.log(game.playEnergy(1, 1));
console.log(game.useAmalgamation(1, 0, 0, 0, [0]))




// Async gameplay