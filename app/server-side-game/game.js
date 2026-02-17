const { cardFactory } = require("./card");
const { Player } = require("./player");

const PERSONAL_DRAW_AMOUNT = 5;
const GLOBAL_DRAW_AMOUNT = 1;

function Target(playerIndex, amalgamationIndex) {
    this.playerIndex = playerIndex;
    this.amalgamationIndex = amalgamationIndex;
}

function CardInfo(card, cardKey, deck = null) {
    this.card = card;
    this.cardKey = cardKey;
    this.deck = deck;
}

class Game {
    /** @type {Player[]} */
    #players = [];

    #turnCount = 0;

    constructor(numberOfPlayers = 2) {
        const energyCrystal = cardFactory("personal test", "material");

        //temp
        const personalDeck = [energyCrystal, energyCrystal, energyCrystal, energyCrystal, energyCrystal];

        for (let i = 0; i < numberOfPlayers; i++) {
            const player = new Player();
            player.changePersonalDeck(personalDeck);
            this.#players.push(player)
        }
    }

    startTurn(playerIndex) {
        this.#turnCount++;

        const player = this.#players[playerIndex];
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
            
            const {card, cardKey} = player.drawFromExternal(cardFactory("global test", "material"));
            if (card) {
                const cardInfo = new CardInfo(card, cardKey, "global");
                cardInfoList.push(cardInfo);
            }
        }

        const target = new Target(playerIndex, null);

        return {target, cardInfoList};
    }

    endTurn(playerIndex) {
        //.. Clear energy
        const player = this.#players[playerIndex];
        player.clearEnergy();
    }

    playPower(playerIndex, amalgamationIndex, cardKey) {
        const player = this.#players[playerIndex];
        const card = player.playPower(cardKey, amalgamationIndex);
        const target = new Target(playerIndex, amalgamationIndex);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    playDefense(playerIndex, amalgamationIndex, cardKey) {
        const player = this.#players[playerIndex];
        const card = player.playDefense(cardKey, amalgamationIndex);
        const target = new Target(playerIndex, amalgamationIndex);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    playEnergy(playerIndex, cardKey) {
        const player = this.#players[playerIndex];
        const card = player.playEnergy(cardKey);
        const target = new Target(playerIndex, null);
        const cardInfo = card ? new CardInfo(card.getAll(), cardKey) : null;
        return {target, cardInfo}
    }

    getPlayers() {
        return this.#players;
    }

    // Dreadful
    useAmalgamation(mainPlayerIndex, otherPlayerIndex, mainAmalgamationIndex, otherAmalgamationIndex, powerSelectionIndices, abilityIndex = null) {
        const mainPlayer = this.#players[mainPlayerIndex];
        const otherPlayer = this.#players[otherPlayerIndex];

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
            const targetPlayer = this.#players[target.playerIndex];
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
}

module.exports = {
    Game
}