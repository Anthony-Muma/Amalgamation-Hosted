// Written by Anthony Muma
// Modified Feb 25, 2026

/**
 * Contains the Card class with cardFactory
 * cardFactory dependant on dataLoader
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

const { material, soul } = require("./dataLoader.js")

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const DEFAULT_SETTINGS = {
    "energy" : null,
    "power" : null,
    "defense" : null,

    "name" : "None",
    "type" : "material",
    "special" : []
}

/* -------------------------------------------------------------------------- */
/*                                 Card Class                                 */
/* -------------------------------------------------------------------------- */

class Card {
    /** @type {number} */
    #energy;
    /** @type {number} */
    #power;
    /** @type {number} */
    #defense;
    /** @type {string} */
    #name;
    /** @type {string} */
    #type;

    constructor(settings = {}) {
        const options = {...DEFAULT_SETTINGS, ...settings};
        this.#energy = options.energy;
        this.#power = options.power;
        this.#defense = options.defense;

        this.#name = options.name;
        this.#type = options.type;
    }

    /* --------------------------------- Getters -------------------------------- */

    getEnergyValue() { return this.#energy; }
    getPowerValue() { return this.#power; }
    getDefenseValue() { return this.#defense; }
    getType() { return this.#type; }
    getName() { return this.#name; }

    /* ------------------------------ Serialization ----------------------------- */

    getAll() {
        return {
            "energy" : this.#energy,
            "power" : this.#power,
            "defense" : this.#defense,
            "name" : this.#name,
            "type" : this.#type
        };
    }

    toString() { return JSON.stringify(this.getAll()); }
}

/* -------------------------------------------------------------------------- */
/*                                Card Factory                                */
/* -------------------------------------------------------------------------- */

/**
 * 
 * @param {string} name 
 * @param {string} type 
 * @returns A card with the data from "app/data"
 */
function cardFactory(name, type) {
    let settings;
    switch (type) {
        case "material":
            settings = material[name];
            break;
        case "soul":
            settings = soul[name];
            break;
    }

    if (!settings) console.warn("could not find card: " + name + ", " + type);

    const card = new Card(settings);
    return card;
}

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */

module.exports = {
    cardFactory,
    Card
};