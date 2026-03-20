import { materialContainer } from "./materialContainer.js";
import { soulContainer } from "./soulContainer.js";

/** @typedef {import('../../types.js').CardInfo} CardInfo */

/**
 * @param {Phaser.Scene} scene
 * @param {CardInfo} cardInfo 
 * @param {number} x 
 * @param {number} y 
 * @returns
 */
export default function cardContainerCreator(scene, cardInfo, x = 0, y = 0) {
    // Check info
    if (cardInfo.card.type === "soul") {
        return new soulContainer(scene, cardInfo, x, y);
    } else if (cardInfo.card.type === "material") {
        return new materialContainer(scene, cardInfo, x, y);
    }
    return undefined
}
