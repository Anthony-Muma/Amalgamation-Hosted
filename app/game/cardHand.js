// Written by Anthony Muma

const {Card} = require("./card.js")

class CardHand {

    /** @type {Map<number, Card>} */
    #cardMap = new Map();
    #counter = 0;

    constructor() {}

    /**
     * 
     * @param {Card} card 
     * @returns {number} key
     */
    add(card) {
        const cardMap = this.#cardMap;
        const key = this.#counter
        cardMap.set(key, card);

        this.#counter++;

        return key
    }

    /**
     * 
     * @param {number} key 
     * @returns {Card | null}
     */
    remove(key) {
        const cardMap = this.#cardMap;
        let card = null;
        if (cardMap.has(key)) {
            card = cardMap.get(key);
            cardMap.delete(key);
        }
        return card;
    }

    get(key) {
        const cardMap = this.#cardMap;
        return cardMap.get(key) || null
    }

    reset() {
        this.#counter = 0;
        this.#cardMap = new Map();
    }

    debugDisplay() {
        this.#cardMap.forEach((value, key)=>(console.log(key, value.getName())))
    }
}

module.exports = {
    CardHand
}