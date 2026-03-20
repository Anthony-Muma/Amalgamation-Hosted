import { baseContainer } from "../cardContainers/baseContainer.js";
import { CardHand } from "./cardHand.js";
import { Energy } from "./energy.js";
import { socket } from "../socket.js";
import { AmalgamationContainer } from "../amalgamationsContainer/amalgamationContainer.js";
import { TurnCounter } from "./turnCounter.js";

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

const PLACEMENTS_PER_TURN = 3

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

        this.enemyAmalgamations = [
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 368, 128, 0xdd0000),
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 640, 128, 0xdd0000),
            new AmalgamationContainer(scene, BASE_AMALGAMATION, 912, 128, 0xdd0000),
        ];
        this.playerTurnCounter = new TurnCounter(scene, PLACEMENTS_PER_TURN)
        this.energy = new Energy(scene);
        this.amalgamationTargetList = [0, 1, 2];

        /* ------------------------------- Game State ------------------------------- */
        this.myTurn = true;

        /* ---------------------------------- debug --------------------------------- */
        let i = 0;
		const hand = this.playerHand
		scene.drawDeck1.on("pointerover", () => scene.drawDeck1.setTint(0xddddff));
		scene.drawDeck1.on("pointerout", () => scene.drawDeck1.clearTint());
		scene.drawDeck1.on("pointerdown", () => {
			scene.drawDeck1.clearTint();
			hand.disableHand();
			hand.draw({cardKey : i++, card : {
				energy: 10,
				attack: 10,
				defense: 10,
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
				energy: 5,
				attack: Phaser.Math.RND.integerInRange(0,10),
				defense: Phaser.Math.RND.integerInRange(0,10),
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

        /* ------------------------------- Zone Events ------------------------------ */

        const ama = this.playerAmalgamations[0];
        // ama.addDefense(TEST_CARD_1);
        // ama.addDefense(TEST_CARD_2);
        // ama.addDefense(TEST_CARD_3);

        
        amalgamationPowerZone1.on("pointerdown", (pointer)=>{
            const index = amalgamationPowerZone1.getData("index")
            const handler = (indices) => {console.log(indices)}
            console.log(this.playerAmalgamations[index].amalgamationInfo)
            this.scene.scene.launch("AttackUI", 
            {gameInfo:{
                energyPool: this.energy.getEnergy(),
                attackSuccessCb : handler
            },
            amalgamationInfo : this.playerAmalgamations[index].amalgamationInfo}
            );
        });

        scene.input.on("dragstart", (pointer, gameObject) => {
            hand.disableHover();
        });

        scene.input.on("dragend", (pointer, gameObject, dropped) => {
            hand.enableHover();
			if (!dropped) this.playerHand.layoutHand(gameObject);
		});

        
        scene.input.on("drop", (pointer, gameObject, dropZone) => {
            hand.enableHover();

            // Camera test
            const zoneType = dropZone.getData("zoneType");
            
            if (this.playerTurnCounter.canPlace()) {
                this.playerHand.layoutHand(gameObject);
            } else if (zoneType === "energyZone") {
                this.#handleEnergyZone(gameObject);
            } else {
                this.#handleAmalgamationZone(gameObject, dropZone)
            }
        });

        this.scene.input.keyboard.on('keydown-SPACE', ()=>{ 
            if (this.myTurn) {
                this.#turnSwap(false);
                this.playerTurnCounter.resetTurnCounter();
                this.energy.resetEnergy();
                socket.emit("game:endTurn");
            }
        });

        

        /* ------------------------------ Events ------------------------------ */

        socket.on("game:turnStarted", (data)=>{
            this.#turnSwap(true);
            const cardInfoList = data.cardInfoList;
            
            for (let cardInfo of cardInfoList) {
                this.playerHand.draw(cardInfo);
            }
            this.energy.resetEnergy();
            this.playerTurnCounter.resetTurnCounter();
        });

        socket.on("game:turnEnded", ()=>{
            // FIXED: game:ready
            // When the game ins't tabbed in when the scene is loaded, this event doesn't fire nore do the others, but as soon as this is tabbed in and then tabbed out, it works like normal??
            this.#turnSwap(false);

            this.playerTurnCounter.resetTurnCounter();
            this.energy.resetEnergy();
        });

        socket.on("game:opponentPlayedPower", (data)=>{
            this.enemyAmalgamations[data.target.amalgamationIndex].addPower(data.cardInfo);
            this.playerTurnCounter.decrementTurn();
        });

        socket.on("game:opponentPlayedDefense", (data)=>{
            const cardInfo = {card: {defense: "?"}}
            this.enemyAmalgamations[data.target.amalgamationIndex].addDefense(cardInfo);
            this.playerTurnCounter.decrementTurn();
        });

        socket.on("game:opponentPlayedEnergy", (data)=>{
            this.energy.addEnergy(data.cardInfo.card.energy);
            this.playerTurnCounter.decrementTurn();
        });

        // Game doesn't load when not tabbed in, this will ready a ready, when all player are ready, game starts
        socket.emit("game:ready");

        this.scene.input.keyboard.on('keydown-E', ()=>{ 
			this.scene.scene.pause("Level");
			this.scene.scene.launch("TargetingScene", this.amalgamationTargetList);
		});
    }

    /**
     * 
     * @param {baseContainer} gameObject 
     */
    #handleEnergyZone(gameObject) {
        const cardInfo = gameObject.getCardInfo();
        this.energy.addEnergy(cardInfo.card.energy);
        this.playerHand.removeCard(cardInfo.cardKey);
        this.playerTurnCounter.decrementTurn();
        socket.emit("game:playEnergy", cardInfo.cardKey);
        //socket.once()
    }

    #handleAmalgamationZone(gameObject, dropZone) {
        
        //socket.once()
        const cardInfo = gameObject.getCardInfo();
        

        const index = dropZone.getData("index");
        const zoneType = dropZone.getData("zoneType")
        const amalgamation = this.playerAmalgamations[index];

        let success;
        if (zoneType === "amalgamationDefenseZone") {
            success = amalgamation.addDefense(cardInfo);
            if (success) socket.emit("game:playDefense", cardInfo.cardKey, index)
        } else {
            success = amalgamation.addPower(cardInfo);
            if (success) socket.emit("game:playPower", cardInfo.cardKey, index)
        }

        if (success) {
            this.playerHand.removeCard(cardInfo.cardKey);
            this.playerTurnCounter.decrementTurn();
        } else {
            this.playerHand.layoutHand(gameObject);
        }
    }

    #turnSwap(switchToMe) {
        if (!switchToMe) {
            this.playerHand.disableHand();
            this.playerHand.disableHover();
            const mainCamera = this.scene.cameras.main
            this.scene.tweens.add({
                targets: mainCamera,
                scrollY: -235,
                ease: 'Expo',
                duration: 2000
            });
        } else {
            this.playerTurnCounter.resetTurnCounter();
            this.playerHand.enableHand();
            this.playerHand.enableHover();
            const mainCamera = this.scene.cameras.main
            this.scene.tweens.add({
                targets: mainCamera,
                scrollY: 0,
                ease: 'Expo',
                duration: 2000
            });
        }
        this.myTurn = switchToMe
    }
}

export {Core}