// Written by Anthony Muma

const {material} = require("./dataLoader.js")

const DEFAULT_SETTINGS = {
    "energyValue" : null,
    "attackValue" : null,
    "defenseValue" : null,

    "name" : "None",
    "type" : "None",
    "special" : []
}

class Card {
    #energyValue;
    #attackValue;
    #defenseValue;

    #name;
    #type;

    constructor(settings = {}) {
        const options = {...DEFAULT_SETTINGS, ...settings};
        this.#energyValue = options.energyValue;
        this.#attackValue = options.attackValue;
        this.#defenseValue = options.defenseValue;

        this.#name = options.name;
        this.#type = options.type;
    }

    getEnergyValue() {
        return this.#energyValue;
    }

    getAttackValue() {
        return this.#attackValue;
    }

    getDefenseValue() {
        return this.#defenseValue;
    }

    getType() {
        return this.#type;
    }

    getName() {
        return this.#name;
    }

    getValues() {
        return {
            "energyValue" : this.#energyValue,
            "attackValue" : this.#attackValue,
            "defenseValue" : this.#defenseValue
        };
    }

    getNameType() {
        return { 
            "name" : this.#name,
            "type" : this.#type
        };
    }

    getAll() {
        return {
            "energyValue" : this.#energyValue,
            "attackValue" : this.#attackValue,
            "defenseValue" : this.#defenseValue,
            "name" : this.#name,
            "type" : this.#type
        };
    }

    toString() {
        return JSON.stringify(this.getAll());
    }
}

/**
 * 
 * @param {string} name 
 * @param {string} type 
 * @returns 
 */
function cardFactory(name, type) {
    let settings;
    switch (type) {
        case "material":
            settings = material[name];
            break;
        //...
    }

    const card = new Card(settings);
    return card;
}

module.exports = {
    cardFactory,
    Card
};