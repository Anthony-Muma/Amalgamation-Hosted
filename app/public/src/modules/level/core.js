import { baseContainer } from "../cardContainers/baseContainer.js";
import { CardHand } from "./cardHand.js";
import { Energy } from "./energy.js";
import { socket } from "../socket.js";

class Core {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */
    constructor(scene) {
        this.scene = scene;
        this.playerHand = new CardHand(scene);
        this.playerAmalgamations = null;
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
				energyValue: 5,
				attackValue: 7,
				defenseValue: 2,
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
				attackValue: 7,
				defenseValue: 2,
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
        scene.add.rectangle(144, 256, 200, 300).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        // const amalgamationZone0 = scene.add.zone(0, 0, 500, 500)
        //     .setRectangleDropZone(500, 500)
        //     .setData({zoneType : "amalgamationZone", index : 0});

		// const amalgamationZone1 = scene.add.zone(0, 0, 500, 500)
        //     .setRectangleDropZone(500, 500)
        //     .setData({zoneType : "amalgamationZone", index : 1});

        // const amalgamationZone2 = scene.add.zone(0, 0, 500, 500)
        //     .setRectangleDropZone(500, 500)
        //     .setData({zoneType : "amalgamationZone", index : 2});
        //     scene.add.zone(0, 0, 500, 500).getData()

        /* ------------------------------- Zone Events ------------------------------ */

        scene.input.on("dragstart", (pointer, gameObject) => {
            
        })
        scene.input.on("dragend", (pointer, gameObject, dropped) => {
			if (!dropped) this.playerHand.layoutHand(gameObject);
		});

        scene.input.on("drop", (pointer, gameObject, dropZone) => {
            // IF NOT YOUR TURN
            const zoneType = dropZone.getData("zoneType");
            

            if (zoneType === "energyZone") {
                this.#handleEnergyZone(gameObject);
            } else if (zoneType == "amalgamationZone") {
                this.#handleAmalgamationZone(gameObject, dropZone)
            }
        });

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
    }
}

export {Core}