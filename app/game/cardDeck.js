// Written by Anthony Muma

const { Card } = require("./card");
const { shuffleArray } = require("../util/arrayUtil");

class CardDeck {

    /**
     * @type {Card[]}
     */
    #cardList = [];
    #currentIndex = 0;

    constructor() {}

    /**
     * 
     * @returns {Card | null}
     */
    draw() {
        const cardList = this.#cardList
        const currentIndex = this.#currentIndex++
        if (currentIndex >= cardList.length) {
            return null;
        }
        return cardList[currentIndex];
    }

    shuffle() {

    }

    
    swap(card, index) {

    }

    add(card) {
        this.#cardList.push(card);
    }

    change(cardList) {
        this.#cardList = cardList;
        this.#currentIndex = 0;
    }

    resetDraw() {
        this.#currentIndex = 0;
    }


    /**
     * DO NOT USE
     * @returns 
     */
    getDeck() {
        return this.#cardList
    }
}

module.exports = {
    CardDeck
}