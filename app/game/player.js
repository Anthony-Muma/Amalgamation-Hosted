// Written by Anthony Muma

const {Amalgamation} = require("./amalgamation");
const {Card} = require("./card");
const {CardHand} = require("./cardHand");
const {CardDeck} = require("./cardDeck");

const ENERGY_CAP = 30;

class Player {
    #energyTotal = 0;

    #personalDeck = new CardDeck();
    #hand = new CardHand();
    #amalgamations = [new Amalgamation(), new Amalgamation(), new Amalgamation()];

    constructor() {}   

    // ==========================================================================
    // Hand / Personal deck stuff
    // ==========================================================================

    /**
     * Add a card to the personal deck
     * @param {Card} card 
     */
    addToPersonalDeck(card) {
        this.#personalDeck.add(card);
    }

    /**
     * Change all cards in the personal deck
     * @param {Card[]} cardList 
     */
    changePersonalDeck(cardList) {
        this.#personalDeck.change(cardList);
    }

    /**
     * Draws a card from the personal deck, adds to the hand
     * @returns {{card : Card | null, cardKey : number}}
     */
    drawFromPersonalDeck() {
        const hand = this.#hand;
        const personalDeck = this.#personalDeck;

        const card = personalDeck.draw();
        if (!card)
            return { card: null, cardKey : -1 }; 

        const cardKey = hand.add(card);
        return {card, cardKey};
    }

    /**
     * Adds the given card to the hand
     * @param {Card} card 
     * @returns {{card : Card, cardKey : number}}
     */
    drawFromExternal(card) {
        const hand = this.#hand;
        const cardKey = hand.add(card);
        return {card, cardKey};
    }


    // ==========================================================================
    // Hand to ... Placements
    // ==========================================================================

    /**
     * 
     * @param {number} cardKey
     * @returns {Card | null}
     */
    playEnergy(cardKey) {
        const hand = this.#hand;
        // Change to .get then remove card later
        const card = hand.remove(cardKey);

        if (!card) {
            // throw new Error("No card was found");
            return null;
        }

        if (!card.getEnergyValue())
            return null;

        // ensure the energy total doesn't go over cap
        this.#energyTotal = Math.min(ENERGY_CAP, this.#energyTotal + card.getEnergyValue());
        return card;
    }

    playPower(cardKey, amalgamationKey) {
        const amalgamation = this.#amalgamations[amalgamationKey];
        const hand = this.#hand;
        const card = hand.remove(cardKey);

        if (!card) {
            // throw new Error("No card was found");
            return null;
        }

        if (!amalgamation) {
            // throw new Error("No amalgamation was found");
            return null;
        }

        const success = amalgamation.addPower(card);
        if (!success) {
            return null;
        }

        return card;
    }

    playDefense(cardKey, amalgamationIndex) {
        const amalgamation = this.#amalgamations[amalgamationIndex];
        const hand = this.#hand;
        const card = hand.remove(cardKey);

        if (!card) {
            return null;
        }

        if (!amalgamation) {
            return null;
        }

        const success = amalgamation.addDefense(card);
        if (!success) {
            return null;
        }
            
        return card;
    }

    // ==========================================================================
    // Using Amalgamation
    // ==========================================================================

    /**
     * 
     * @param {number} amalgamationIndex 
     * @param {number[]} attackSelectionIndices 
     * @param {number} abilityIndex 
     * @returns {{attack : number, special}}
     */
    generateAttack(amalgamationIndex, attackSelectionIndices, abilityIndex = null) {
        const amalgamation = this.#amalgamations[amalgamationIndex];
        const {attack, special, energyCost} = amalgamation.generateAttack(attackSelectionIndices, abilityIndex);

        if (energyCost > this.#energyTotal) {
            return {attack : 0, special : null};
        } 

        this.#energyTotal -= energyCost;

        return {attack, special};
    }

    /**
     * 
     * @param {number} amalgamationIndex 
     * @returns {Amalgamation}
     */
    getAmalgamation(amalgamationIndex) {
        return this.#amalgamations[amalgamationIndex];
    }
    // ==========================================================================
    // ...
    // ==========================================================================

    clearEnergy() {
        this.#energyTotal = 0;
    }

    reset() {}

    // Debug stuff
    debugHand() {
        this.#hand.debugDisplay();
    }

    debugAma(amalgamationIndex) {
        const amalgamation = this.#amalgamations[amalgamationIndex];
        console.log(amalgamation.getAllAttributes());
    }

    debugEnergy() {
        console.log("Energy amount : " + this.#energyTotal);
    }

    debugPersonalDeck() {
        console.log(this.#personalDeck.getDeck());
    }
}

module.exports = {
    Player
};