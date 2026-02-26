// Written by Anthony Muma
// Modified Feb 25, 2026

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

const { Card } = require("./card.js");

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const DEFAULT_SETTINGS = {};

/* -------------------------------------------------------------------------- */
/*                              Supporting Types                              */
/* -------------------------------------------------------------------------- */

function DefenseObject(defense) {
    this.defense = defense;
}

function PowerObject(power, energy) {
    this.power = power;
    this.energy = energy;
}

/* -------------------------------------------------------------------------- */
/*                             Amalgamation Class                             */
/* -------------------------------------------------------------------------- */

class Amalgamation {

    /* ----------------------------- Private Fields ----------------------------- */

    /** not yet implement */
    #souls = [];
    /**
     * A list containing all of the available "Powers/Attacks" that can be played from this Amalgamation
     * @type {PowerObject[]}
     */
    #powers = [];
    /**
     * A list containing all of the active "Defenses" that are attached to this Amalgamation
     * @type {DefenseObject[]}
     */
    #defenses = [];
    /** @type {number} */
    #maxDefense = 3;
    /** @type {number} */
    #healthPoints = 3;
    /** @type {boolean} */
    #alive = true;
    /** @type {string} */
    #name = "Unnamed";

    /* ------------------------------- Constructor ------------------------------ */

    constructor(settings = {}) {}

    /* ----------------------------- Private Helpers ---------------------------- */

    /**
     * A private helper method that handles the placement of "Soul" type cards that were placed as power.
     * @param {Card} card 
     */
    #addSoul(card) {
        const souls = this.#souls;
        souls.push(card.getName());

        // Handle class upgrade (to be implemented later)
    }

    /**
     * A private helper method that handles the placement of "Material" type cards that were placed as power.
     * @param {Card} card 
     */
    #addMaterial(card) {
        const powers = this.#powers;

        // For now, power cost the same as attack value
        const powerObject = new PowerObject(card.getPowerValue(), card.getPowerValue());
        powers.push(powerObject);
    }

    /* ------------------------------ Card Actions ------------------------------ */

    /**
     * Given a card, attempts to add it to the list of powers/souls
     * @param {Card} card 
     * @returns {boolean} weather the cards was successfully added
     */
    addPower(card) {
        if (!card.getPowerValue()) {
            return false
        }

        switch (card.getType()) {
            case ("material"):
                this.#addMaterial(card);
                break;
            case ("soul"):
                this.#addSoul(card);
                break;
        }

        return true;
    }

    /**
     * Given a card, attempts to add it to the list of defenses
     * @param {Card} card 
     * @returns {boolean} weather the cards was successfully added
     */
    addDefense(card) {
        const defenses = this.#defenses;
        const maxDefense = this.#maxDefense;

        if (!card.getDefenseValue()) {
            return false;
        }

        if (maxDefense <= defenses.length) {
            return false;
        }

        const defenseObject = new DefenseObject(card.getDefenseValue());

        defenses.push(defenseObject);
    }

    /* ----------------------------- Combat / Damage ---------------------------- */

    /**
     * 
     * @param {number} incomingAttack 
     * @param {number?} ignoreNumberOfLayers 
     * @returns 
     */
    damageIteration(incomingAttack, ignoreNumberOfLayers = 0) {
        const defenses = this.#defenses;
        let remainingAttack = incomingAttack;

        const amalgamationInfo = {
            alive : this.#alive,
            healthPointDifference : 0
        }
        
        /**
         * @type {{popped : boolean, defenseObject : DefenseObject | null, negativeIndexOfDefenseCard : number}}
         */
        const defenseInfo = {
            popped : false,
            defenseObject : null,
            negativeIndexOfDefenseCard : null
        };

        // attack healthPoints directly
        if (defenses.length - ignoreNumberOfLayers <= 0) {
            const initialHealthPoints = this.#healthPoints;
            remainingAttack = 0;
            this.#healthPoints = Math.max(0, initialHealthPoints - incomingAttack);
            amalgamationInfo.healthPointDifference = initialHealthPoints - this.#healthPoints;
            
            if (this.#healthPoints == 0) {
                this.#alive = false;
                amalgamationInfo.alive = false;
            }
            
        // attack defense card
        } else {
            const negativeIndexOfDefenseCard = (- 1 - ignoreNumberOfLayers);
            const currentDefenseTarget = defenses.at(negativeIndexOfDefenseCard);
            
            defenseInfo.defenseObject = currentDefenseTarget;
            defenseInfo.negativeIndexOfDefenseCard = negativeIndexOfDefenseCard;

            // Broken
            if (currentDefenseTarget.defense <= incomingAttack) {
                remainingAttack = incomingAttack - currentDefenseTarget.defense;
                defenseInfo.popped = true;
                defenses.splice(negativeIndexOfDefenseCard);

            // Non-broken
            } else {
                remainingAttack = 0;
            }
        }
        
        return {
            remainingAttack, 
            amalgamationInfo, 
            defenseInfo
        }
    }

    /* ---------------------------- Attack Generation --------------------------- */

    /**
     * ***Assuming clean inputs (i.e no duplicates, out of range, etc), add error checking later***
     * @param {number[]} attackSelectionIndices 
     * @param {number} abilityIndex 
     * @returns 
     */
    generateAttack(attackSelectionIndices, abilityIndex = null) {
        const powers = this.#powers;

        let attack = 0;
        let energyCost = 0;

        // implement later
        let special = null;

        for (let i of attackSelectionIndices) {
            attack += powers[i].power;
            energyCost += powers[i].energy;
        }

        return {attack, energyCost, special};
    }

    /* --------------------------------- Getters -------------------------------- */

    getAllAttributes() {
        return {
            souls: this.#souls,
            powers: this.#powers,
            defenses: this.#defenses,
            maxDefense: this.#maxDefense
        }
    }

    getStatus() {
        return {
            alive : this.#alive
        }
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */

module.exports = {Amalgamation};
