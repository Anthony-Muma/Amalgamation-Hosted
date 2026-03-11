import { baseContainer } from "../cardContainers/baseContainer.js";
import { CardHand } from "./cardHand.js";
import { Energy } from "./energy.js";
import { socket } from "../socket.js";
import { AmalgamationContainer } from "../amalgamationsContainer/amalgamationContainer.js";

/**
 * @type {import("../../types.js").AmalgamationInfo}
 */
const BASE_AMALGAMATION = {
    name : "Knight",
    health : 3,
    alive : true,
    maxDefense : 3,
    powerObjectList : [],
    defenseObjectList : []
}

/**
 * @type {import("../../types.js").CardInfo}
 */
const TEST_CARD_1 = {
    card : {
        energyValue: 10,
        attackValue: 10,
        defenseValue: 10,
        name: "log",
        type: "material",
    },
    cardKey : 0,
    deck : null
}

const TEST_CARD_2 = {
    card : {
        energyValue: 10,
        attackValue: 10,
        defenseValue: 3,
        name: "log",
        type: "material",
    },
    cardKey : 0,
    deck : null
}

const TEST_CARD_3 = {
    card : {
        energyValue: 10,
        attackValue: 10,
        defenseValue: 5,
        name: "log",
        type: "material",
    },
    cardKey : 0,
    deck : null
}

class Core {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */
    constructor(scene) {
        this.scene = scene;
        this.playerHand = new CardHand(scene);
        this.playerAmalgamations = [
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 368, 368),
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 640, 368),
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 912, 368),
        ];
        this.energy = new Energy(scene);

        /* ---------------------------------- debug --------------------------------- */
        let i = 0;
		const hand = this.playerHand
		scene.drawDeck1.on("pointerover", () => scene.drawDeck1.setTint(0xddddff));
		scene.drawDeck1.on("pointerout", () => scene.drawDeck1.clearTint());
		scene.drawDeck1.on("pointerdown", () => {
			scene.drawDeck1.clearTint();
			hand.disableHand();
			hand.draw({cardKey : i++, card : {
				energyValue: 10,
				attackValue: 10,
				defenseValue: 0,
				name: ["power", "knowledge", "protector", "arcane", "vital"][Phaser.Math.RND.integerInRange(0,4)],
				type: 'soul'
			}});
			hand.enableHand();
		});

		scene.drawDeck2.on("pointerover", () => scene.drawDeck2.setTint(0xddddff));
		scene.drawDeck2.on("pointerout", () => scene.drawDeck2.clearTint());
		scene.drawDeck2.on("pointerdown", () => {
			scene.drawDeck2.clearTint();
			hand.disableHand();
			hand.draw({cardKey : i++, card : {
				energyValue: 5,
				attackValue: Phaser.Math.RND.integerInRange(0,10),
				defenseValue: Phaser.Math.RND.integerInRange(0,10),
				name: ["sword", "log", "crystals", "pillow", "mushroom"][Phaser.Math.RND.integerInRange(0,4)],
				type: 'material'
			}});
			hand.enableHand();
		});

        /* ------------------------------- Setup Zones ------------------------------ */

         
        const energyZone = scene.add.zone(144, 256, 200, 300)
            .setOrigin(0.5, 0.5)
            .setRectangleDropZone(200, 300)
            .setData({zoneType : "energyZone", index : 0});
        scene.add.rectangle(144, 256, 200, 300).setStrokeStyle(2, 0x00ff00).setFillStyle(0x00ff00, 0.2);

        // Zone 0
        const amalgamationPowerZone0 = scene.add.zone(318, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationPowerZone", index: 0});
        scene.add.rectangle(318, 368, 100, 200).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone0 = scene.add.zone(418, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationDefenseZone", index: 0});
        scene.add.rectangle(418, 368, 100, 200).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);

        // Zone 1
        const amalgamationPowerZone1 = scene.add.zone(590, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationPowerZone", index: 1});
        scene.add.rectangle(590, 368, 100, 200).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone1 = scene.add.zone(690, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationDefenseZone", index: 1});
        scene.add.rectangle(690, 368, 100, 200).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);

        // Zone 2
        const amalgamationPowerZone2 = scene.add.zone(862, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationPowerZone", index: 2});
        scene.add.rectangle(862, 368, 100, 200).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone2 = scene.add.zone(962, 368, 100, 200)
            .setRectangleDropZone(100, 200)
            .setData({zoneType: "amalgamationDefenseZone", index: 2});
        scene.add.rectangle(962, 368, 100, 200).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);
            // scene.add.zone(0, 0, 500, 500).getData()

        /* ------------------------------- Zone Events ------------------------------ */

        const ama = this.playerAmalgamations[0];
        // ama.addDefense(TEST_CARD_1);
        // ama.addDefense(TEST_CARD_2);
        // ama.addDefense(TEST_CARD_3);

        scene.input.on("dragstart", (pointer, gameObject) => {
            hand.disableHover();
        });

        scene.input.on("dragend", (pointer, gameObject, dropped) => {
            hand.enableHover();
			if (!dropped) this.playerHand.layoutHand(gameObject);
		});

        
        scene.input.on("drop", (pointer, gameObject, dropZone) => {
            // IF NOT YOUR TURN
            hand.enableHover();

            // Camera test
            const zoneType = dropZone.getData("zoneType");
            

            if (zoneType === "energyZone") {
                this.#handleEnergyZone(gameObject);
            } else {
                this.#handleAmalgamationZone(gameObject, dropZone)
            }
        });

        let testSwitch = true
        this.scene.input.keyboard.on('keydown-SPACE', ()=>{
            if (testSwitch) {
                hand.disableHand();
                hand.disableHover();
                const mainCamera = this.scene.cameras.main
                this.scene.tweens.add({
                    targets: mainCamera,
                    scrollY: -235,
                    ease: 'Expo',
                    duration: 2000
                });
            } else {
                hand.enableHand();
                hand.enableHover();
                const mainCamera = this.scene.cameras.main
                this.scene.tweens.add({
                    targets: mainCamera,
                    scrollY: 0,
                    ease: 'Expo',
                    duration: 2000
                });
            }
            testSwitch = !testSwitch
        });  // specific key

        /* ------------------------------ Events ------------------------------ */

        // TODO:
        socket.on("game:turnStarted", (data)=>{

        });

        socket.on("game:turnEnded", (data)=>{

        });

        socket.on("game:opponentPlayedEnergy", (data)=>{

        });
    }

    /**
     * 
     * @param {baseContainer} gameObject 
     */
    #handleEnergyZone(gameObject) {
        const cardInfo = gameObject.getCardInfo();
        this.energy.addEnergy(cardInfo.card.energyValue);
        this.playerHand.removeCard(cardInfo.cardKey);
        //socket.emit()
        //socket.once()
    }

    #handleAmalgamationZone(gameObject, dropZone) {
        //socket.emit()
        //socket.once()
        const cardInfo = gameObject.getCardInfo();
        const index = dropZone.getData("index");
        const zoneType = dropZone.getData("zoneType")
        const amalgamation = this.playerAmalgamations[index];

        let success;
        if (zoneType === "amalgamationDefenseZone") {
            success = amalgamation.addDefense(cardInfo);
            //socket.emit()
        } else {
            success = amalgamation.addPower(cardInfo);
            //socket.emit()
        }

        if (success) {
            this.playerHand.removeCard(cardInfo.cardKey);
        } else {
            this.playerHand.layoutHand(gameObject);
        }
    }

    #turnSwap() {
        
    }
}

export {Core}