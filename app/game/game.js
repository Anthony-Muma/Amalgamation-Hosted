// Written by Anthony Muma
// Modified Feb 25, 2026

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

const { Card, cardFactory } = require("./card");
const { Player } = require("./player");

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const PERSONAL_DRAW_AMOUNT = 5;
const GLOBAL_DRAW_AMOUNT = 1;

const GAME_STATES = Object.freeze({
    PREPARATION : "PREPARATION",
    STANDARDPLAY : "STANDARDPLAY",
    NONE : "NONE",
})

/* -------------------------------------------------------------------------- */
/*                              Supporting Types                              */
/* -------------------------------------------------------------------------- */

/**
 * @typedef {Object} Target
 * @property {number} playerIndex
 * @property {number | null} amalgamationIndex
 */

/**
 * @typedef {Object} CardInfo
 * @property {Card} card
 * @property {number} cardKey
 * @property {string | Null} deck
 */

/**
 * @constructor
 * @param {number} playerIndex
 * @param {number} amalgamationIndex
 */
function Target(playerIndex, amalgamationIndex = null) {
    this.playerIndex = playerIndex;
    this.amalgamationIndex = amalgamationIndex;
}

/**
 * @constructor
 * @param {Card} card
 * @param {number} cardKey
 * @param {string} deck
 */
function CardInfo(card, cardKey, deck = null) {
    this.card = card;
    this.cardKey = cardKey;
    this.deck = deck;
}

/* -------------------------------------------------------------------------- */
/*                                 Main Class                                 */
/* -------------------------------------------------------------------------- */

class Game {

    /* ----------------------------- Private Fields ----------------------------- */

    /** @type {Map<string, Player>} */
    #players = new Map();
    /** @type {number} */
    #turnCount = 0;

    // Game state
    #gameState = GAME_STATES.NONE;
    #playerTurn;

    /* ------------------------------- Constructor ------------------------------ */

    constructor() {}

    /* ----------------------------- Player Manager ----------------------------- */

    addPlayer(playerId) {
        // Needs a check to see if the player is already in the game...

        const player = new Player();

        // For now, create a starter deck for the player
        // TODO: will change later

        const energyCrystal = cardFactory("personal test", "material");
        const personalDeck = [energyCrystal, energyCrystal, energyCrystal, energyCrystal, energyCrystal];
        player.changePersonalDeck(personalDeck);

        // Add player
        this.#players.set(playerId, player);
    }

    removePlayer(playerId) {
        this.#players.delete(playerId);
    }

    /* ----------------------------- Game State Flow ---------------------------- */

    startTurn(playerId) {
        const player = this.#players.get(playerId);

        if (!player) {
            throw new Error("No player Id was found:" + playerId)
        }

        this.#turnCount++;

        /** @type {CardInfo[]} */
        const cardInfoList = [];

        // Draw from personal deck
        for (let i = 0; i < PERSONAL_DRAW_AMOUNT; i++) {
            const {card, cardKey} = player.drawFromPersonalDeck();
            if (card) {
                const cardInfo = new CardInfo(card, cardKey, "personal");
                cardInfoList.push(cardInfo);
            }
        }
        
        // Draw from global deck
        for (let i = 0; i < GLOBAL_DRAW_AMOUNT; i++) {
            const {card, cardKey} = player.drawFromExternal(deckGenerator(this.#turnCount));
            const cardInfo = new CardInfo(card, cardKey, "global");
            cardInfoList.push(cardInfo);
        }

        // Set target
        const target = new Target(playerId);

        // Update playerTurn
        this.#playerTurn = playerId;

        // Return
        return {target, cardInfoList};
    }

    endTurn(playerId) {
        const player = this.#players.get(playerId);
        if (!player) {
            throw new Error("No player Id was found:" + playerId)
        }

        //.. Clear energy .. Do other stuff when the player ends there turn
        player.clearEnergy();
    }

    /* ----------------------------- Player Actions ----------------------------- */

    playPower(playerId, amalgamationIndex, cardKey) {
        // Add error checks
        const player = this.#players.get(playerId);
        const card = player.playPower(cardKey, amalgamationIndex);
        const target = new Target(playerId, amalgamationIndex);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    playDefense(playerId, amalgamationIndex, cardKey) {
        // Add error checks
        const player = this.#players.get(playerId);
        const card = player.playDefense(cardKey, amalgamationIndex);
        const target = new Target(playerId, amalgamationIndex);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    playEnergy(playerId, cardKey) {
        // Add error checks
        const player = this.#players.get(playerId);
        const card = player.playEnergy(cardKey);
        const target = new Target(playerId, null);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    useAmalgamation(mainPlayerIndex, otherPlayerIndex, mainAmalgamationIndex, otherAmalgamationIndex, powerSelectionIndices, abilityIndex = null) {
        const mainPlayer = this.#players.get(mainPlayerIndex);
        const otherPlayer = this.#players.get(otherPlayerIndex);

        // const mainAmalgamation = mainPlayer.getAmalgamation(amalgamationIndex);
        // const otherAmalgamation = otherPlayer.getAmalgamation(otherAmalgamationIndex);

        const {attack, special} = mainPlayer.generateAttack(mainAmalgamationIndex, powerSelectionIndices, abilityIndex);


        
        /**
         * 
         * @param {Target} target 
         * @param {string} action 
         * @param {*} info
         */
        function QueueObject(target, action, info) {
            this.target = target;
            this.action = action;
            this.info = info;
        }
        

        /** @type {QueueObject[]} */
        const returnQueue = [];
        /** @type {QueueObject[]} */
        const attackQueue = [];

        returnQueue.push(
            new QueueObject(
                new Target(mainPlayerIndex, mainAmalgamationIndex),
                "startAttack",
                "normal"
            )
        )

        // Handle start
            // normal
        const normalStart = new QueueObject(
            new Target(otherPlayerIndex, otherAmalgamationIndex),
            "damageStamp",
            attack
        )
        returnQueue.push(normalStart);
        attackQueue.push(normalStart);
            // multi-attack
            // etc

        while (attackQueue.length > 0) {
            const {target, info} = attackQueue.shift();
            const incomingDamage = info
            const targetPlayer = this.#players.get(target.playerIndex);
            const targetAmalgamation = targetPlayer.getAmalgamation(target.amalgamationIndex);

            const {remainingAttack, amalgamationInfo, defenseInfo} = targetAmalgamation.damageIteration(incomingDamage);

            // handle cases like vampire

            // Queue stuff (refer to state diagram)

            // 
            

            if (defenseInfo.defenseObject) {
                returnQueue.push(
                    new QueueObject(
                        target,
                        "defenseFlip",
                        defenseInfo
                    )
                )
            } else {
                returnQueue.push(
                    new QueueObject(
                        target,
                        "directDamage",
                        amalgamationInfo
                    )
                )
            }

            if (remainingAttack > 0) {
                returnQueue.push(new QueueObject(target, "damageStamp", remainingAttack));
                attackQueue.push(new QueueObject(target, "damageStamp", remainingAttack));
            }
        }

        return returnQueue;
    }

    /* ------------------------------- Game State ------------------------------- */

    advanceGameState(){
        
        // // Advance
        
        // If game state is none, 
        if (this.#gameState === GAME_STATES.NONE) {

            // Set to preparation
            this.#gameState = GAME_STATES.PREPARATION;

        }
        // Else if game state is preparation,
        else if (this.#gameState === GAME_STATES.PREPARATION) {

            // Set to normal
            this.#gameState = GAME_STATES.NORMAL;

        }
        // Else if game state is normal,
        else if (this.#gameState === GAME_STATES.NORMAL) {

            // Set to none
            this.#gameState = GAME_STATES.NONE;

        }

    }
    
    getGameState(){

        // Return
        return this.#gameState;
        
    }

    alternateTurn(){

        // Get playerIds
        const playerIds = Array.from(this.#players.keys());

        // Alternate player turn to the other playerId in players
        this.#playerTurn = playerIds.find(id => id !== this.#playerTurn);

        // Increase the turn count by 0.5.
        this.#turnCount += 0.5;

    }

    /* ---------------------------------- Misc ---------------------------------- */

    getPlayers() {
        return this.#players;
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */

module.exports = {
    Game,
    GAME_STATES,
}