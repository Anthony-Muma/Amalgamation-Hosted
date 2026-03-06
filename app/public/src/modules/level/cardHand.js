/**
 * Responsible for handling the creation AND deletion of hand held cards,
 * Events are NOT handled here
 */
import { baseContainer } from "../cardContainers/baseContainer.js";
import { cardContainerCreator } from "../cardContainers/index.js";

const SPACING = 160;
const ANCHOR_X = 640;
const HAND_Y = 592;

const PERSONAL_DECK_X = 1104;
const PERSONAL_DECK_Y = 144;

class CardHand {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */
    constructor(scene) {
        this.scene = scene;
        /**
         * @type {Map<number, baseContainer>}
         */
        this.hand = new Map()
    }

    disableHand() {
        this.hand.forEach((card) =>{
            card.disableDrag();
            // card.disableHover();
        });
    }

    enableHand() {
        this.hand.forEach((card) =>{
            card.enableDrag();
            // card.disableHover();
        });
    }

    /**
     * @param {import("../../types.js").CardInfo} cardInfo 
     */
    draw(cardInfo) {
        let card;

        if (cardInfo.deck === "personal") {
            card = cardContainerCreator(this.scene, cardInfo, PERSONAL_DECK_X, PERSONAL_DECK_Y);
        } else {
            card = cardContainerCreator(this.scene, cardInfo, PERSONAL_DECK_X, PERSONAL_DECK_Y);
        }

        card.enableInteractable();
        card.enableHover();

        // If the cardKey already exists, destroy old card.
        const buggedCard = this.hand.get(cardInfo.cardKey);
        if (buggedCard) {
            buggedCard.destroy();
            console.warn("Card within the hand already has an id of: " + cardInfo.cardKey);
        }

        this.hand.set(cardInfo.cardKey, card);
        console.log(this.hand);
        this.layoutHand(card);
    }

    /**
     * @param {number} cardKey 
     */
    removeCard(cardKey) {
        const card = this.hand.get(cardKey);
        if (card) {
            this.hand.delete(cardKey);
            card.destroy();
        }

        this.layoutHand();
    }

    /**
     * 
     * @param {baseContainer} insertingCard - Optional card that is outside of the hand, but should be moved back in
     */
    layoutHand(insertingCard=null) {
        const count = this.hand.size;

        const totalWidth = (count - 1) * SPACING;
    	const startX = ANCHOR_X - totalWidth / 2;

        let i = 0;
    	this.hand.forEach((card) => {
        	const targetX = startX + i * SPACING;
        	const isNew = card === insertingCard;

            // Kill only the layout tween
            if (card._layoutTween) card._layoutTween.stop();

        	card._layoutTween = this.scene.tweens.add({
            	targets:    card,
            	x:          targetX,
            	y:          HAND_Y,
            	duration:   isNew ? 350 : 200,
            	ease:       isNew ? "Back.easeOut" : "Quad.easeOut",
            	onComplete: () => {
					card._layoutTween = null;
				}
        	});

            if (isNew && !card.isFaceUp) {
                this.scene.time.delayedCall(400, () => {
                    if (!card.isFaceUp) card.flipCard();
                });
            }

            i++;
    	});
	}
}

export {CardHand}