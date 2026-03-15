
/**
 * Represents card
 * @typedef {object} Card
 * @property {number | null} energyValue
 * @property {number | null} attackValue
 * @property {number | null} defenseValue
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef {Object} CardInfo
 * @property {Card} card
 * @property {number} cardKey
 * @property {string | Null} deck
 */

/**
 * @typedef {Object} AmalgamationInfo
 * @property {string} name
 * @property {number} health
 * @property {boolean} alive
 * @property {number} maxDefense
 * @property {{ energy: number, power: number }[]} powerObjectList
 * @property {{ defense: number }[]} defenseObjectList
 */

export const types = {};