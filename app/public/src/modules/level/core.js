import { baseContainer } from "../cardContainers/baseContainer.js";
import { CardHand } from "./cardHand.js";
import { Energy } from "./energy.js";
import { socket } from "../socket.js";
import { AmalgamationContainer } from "../amalgamationsContainer/amalgamationContainer.js";
import { TurnCounter } from "./turnCounter.js";
import { AttackStager } from "./attackStager.js";

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
const DEBUG = false;
const STARTING_PLACEMENTS_PER_TURN = 6;
const PLACEMENTS_PER_TURN = 3

const BASE_AMA_X = 640;
const BASE_AMA_Y = 416;
const AMA_X_SPACING = 640-368;
const AMA_Y_SPACING = 416 - 64;



class Core {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */
    constructor(scene) {
        this.scene = scene;
        this.playerHand = new CardHand(scene);
        this.playerAmalgamations = [
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X - AMA_X_SPACING, BASE_AMA_Y, 0),
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X, BASE_AMA_Y, 1),
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X + AMA_X_SPACING, BASE_AMA_Y, 2),
        ];

        this.enemyAmalgamations = [
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X - AMA_X_SPACING, BASE_AMA_Y - AMA_Y_SPACING, 0, 0xdd0000),
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X, BASE_AMA_Y - AMA_Y_SPACING, 1, 0xdd0000),
            new AmalgamationContainer(scene, structuredClone(BASE_AMALGAMATION), BASE_AMA_X + AMA_X_SPACING, BASE_AMA_Y - AMA_Y_SPACING, 2, 0xdd0000),
        ];

        this.playerTurnCounter = new TurnCounter(scene, STARTING_PLACEMENTS_PER_TURN)
        this.energy = new Energy(scene);
        this.attackStager = new AttackStager(scene, socket.id, this.playerAmalgamations, this.enemyAmalgamations);

        this.scene.cameras.main.setZoom(0.75);
        
        /* ------------------------------- Game State ------------------------------- */
        this.myTurn = true;
        this.canTarget = false;
        this.allPlayersLoaded = false;
    
        // Player specific 
        this.totalTurnExchanges = 0;

        /* ---------------------------------- debug --------------------------------- */
        let i = 0;
		const hand = this.playerHand
		scene.drawDeck1.on("pointerover", () => scene.drawDeck1.setTint(0xddddff));
		scene.drawDeck1.on("pointerout", () => scene.drawDeck1.clearTint());
		scene.drawDeck1.on("pointerdown", () => {
			scene.drawDeck1.clearTint();
			hand.disableHand();
			hand.draw({cardKey : i++, card : {
				energy: null,
				attack: null,
				defense: null,
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
				power: Phaser.Math.RND.integerInRange(0,10),
				defense: Phaser.Math.RND.integerInRange(0,10),
				name: ["sword", "log", "crystals", "pillow", "mushroom"][Phaser.Math.RND.integerInRange(0,4)],
				type: 'material'
			}});
			hand.enableHand();
		});

        /* ------------------------------- Setup Zones ------------------------------ */

         
        const energyZone = scene.add.zone(16, 224, 200, 300)
            .setOrigin(0.5, 0.5)
            .setRectangleDropZone(200, 300)
            .setData({zoneType : "energyZone", index : 0});
        
        if (DEBUG) scene.add.rectangle(16, 224, 200, 300).setStrokeStyle(2, 0x00ff00).setFillStyle(0x00ff00, 0.2);

        // Zone 0
        const amalgamationPowerZone0 = scene.add.zone(308, 418, 120, 230)
            .setRectangleDropZone(120, 230)
            .setData({zoneType: "amalgamationPowerZone", index: 0});
        if (DEBUG) scene.add.rectangle(308, 418, 120, 230).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone0 = scene.add.zone(438, 418, 140, 230)
            .setRectangleDropZone(140, 230)
            .setData({zoneType: "amalgamationDefenseZone", index: 0});
        if (DEBUG) scene.add.rectangle(438, 418, 140, 230).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);

        // Zone 1
        const amalgamationPowerZone1 = scene.add.zone(580, 418, 120, 230)
            .setRectangleDropZone(120, 230)
            .setData({zoneType: "amalgamationPowerZone", index: 1});
        if (DEBUG) scene.add.rectangle(580, 418, 120, 230).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone1 = scene.add.zone(710, 418, 140, 230)
            .setRectangleDropZone(140, 230)
            .setData({zoneType: "amalgamationDefenseZone", index: 1});
        if (DEBUG) scene.add.rectangle(710, 418, 140, 230).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);

        // Zone 2
        const amalgamationPowerZone2 = scene.add.zone(852, 418, 120, 230)
            .setRectangleDropZone(120, 230)
            .setData({zoneType: "amalgamationPowerZone", index: 2});
        if (DEBUG) scene.add.rectangle(852, 418, 120, 230).setStrokeStyle(2, 0xff0000).setFillStyle(0xff0000, 0.2);

        const amalgamationDefenseZone2 = scene.add.zone(982, 418, 140, 230)
            .setRectangleDropZone(140, 230)
            .setData({zoneType: "amalgamationDefenseZone", index: 2});
        if (DEBUG) scene.add.rectangle(982, 418, 140, 230).setStrokeStyle(2, 0x0000ff).setFillStyle(0x0000ff, 0.2);
        /* ------------------------------- Zone Events ------------------------------ */
        
        // amalgamationPowerZone1.on("pointerdown", (pointer)=>{
        //     const index = amalgamationPowerZone1.getData("index")
        //     const handler = (indices) => {console.log(indices)}
        //     console.log(this.playerAmalgamations[index].amalgamationInfo)
        //     this.scene.scene.launch("AttackUI", 
        //     {gameInfo:{
        //         energyPool: this.energy.getEnergy(),
        //         attackSuccessCb : handler
        //     },
        //     amalgamationInfo : this.playerAmalgamations[index].amalgamationInfo}
        //     );
        // });

        scene.input.on("dragstart", (pointer, gameObject) => {
            hand.disableHover();
        });

        scene.input.on("dragend", (pointer, gameObject, dropped) => {
            hand.enableHover();
			if (!dropped) this.playerHand.layoutHand(gameObject);
		});

        
        scene.input.on("drop", (pointer, gameObject, dropZone) => {
            hand.enableHover();

            const zoneType = dropZone.getData("zoneType");
            
            if (!this.playerTurnCounter.canPlace() || this.attackStager.isActive()) {
                this.playerHand.layoutHand(gameObject);
            } else if (zoneType === "energyZone") {
                this.#handleEnergyZone(gameObject);
            } else {
                const index = dropZone.getData("index");
                const alive = this.playerAmalgamations[index].amalgamationInfo.alive;
                if (alive) {
                    this.#handleAmalgamationZone(gameObject, dropZone)
                } else {
                    this.playerHand.layoutHand(gameObject);
                }
            }
        });

        this.scene.input.keyboard.on('keydown-SPACE', ()=>{ 
            if (this.myTurn && this.allPlayersLoaded) {
                // this.#turnSwap(false);
                // this.playerTurnCounter.resetTurnCounter();
                // this.energy.resetEnergy();
                socket.emit("game:endTurn");
            }
        });

        

        /* ------------------------------ Events ------------------------------ */

        socket.on("game:turnStarted", (data)=>{
            this.myTurn = true;

            this.totalTurnExchanges++;
            if (this.totalTurnExchanges === 3) this.playerTurnCounter.changeTotalPlacement(PLACEMENTS_PER_TURN);
            this.allPlayersLoaded = true;
            
            this.playerTurnCounter.resetTurnCounter();
            this.playerHand.enableHand();
            this.playerHand.enableHover();

            const mainCamera = this.scene.cameras.main;
            this.scene.tweens.add({
                targets: mainCamera,
                scrollY: 0,
                ease: 'Expo',
                duration: 2000,
                onComplete: () => {
                    if (this.totalTurnExchanges > 2) this.canTarget = true;
                },
            });
            const cardInfoList = data.cardInfoList;
            
            for (let cardInfo of cardInfoList) {
                this.playerHand.draw(cardInfo);
            }

            this.energy.resetEnergy();
            this.playerTurnCounter.resetTurnCounter();
        });

        socket.on("game:turnEnded", ()=>{
            this.myTurn = false;

            this.totalTurnExchanges++;
            if (this.totalTurnExchanges === 3) this.playerTurnCounter.changeTotalPlacement(PLACEMENTS_PER_TURN);

            // FIXED: game:ready
            // When the game ins't tabbed in when the scene is loaded, this event doesn't fire nore do the others, but as soon as this is tabbed in and then tabbed out, it works like normal??
            this.canTarget = false;
            this.playerHand.disableHand();
            this.playerHand.disableHover();

            const mainCamera = this.scene.cameras.main;
            this.scene.tweens.add({
                targets: mainCamera,
                scrollY: -235,
                ease: 'Expo',
                duration: 2000,
            });

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

        socket.on("game:amalgamationUsed", (eventQueue, currentEnergyPool)=>{
            this.attackStager.addToQueue(eventQueue);
            this.energy.setEnergy(currentEnergyPool);
        });

        // Game doesn't load when not tabbed in, this will ready a ready, when all player are ready, game starts
        socket.emit("game:ready");

        /* ------------------------------ Attack Stuff ------------------------------ */

        // this.scene.scene.resume("Level");
            // console.warn(this.playerAmalgamations[allyIndex].amalgamationInfo)

        // Callback functions
        const onSelectionCb = (allyIndex, enemyIndex) => {
            this.scene.scene.stop("TargetingScene");
            // this.scene.scene.resume("Level");
            
            const attackSuccessCb = (selectionIndices) => {
                socket.emit("game:useAmalgamation", allyIndex, enemyIndex, selectionIndices);
            }
            
            this.scene.scene.launch("AttackUI", 
                {
                    gameInfo:{ 
                        energyPool: this.energy.getEnergy(),
                        attackSuccessCb
                    }, 
                    amalgamationInfo : this.playerAmalgamations[allyIndex].amalgamationInfo
                }
            );
        }

        // Opens targeting menu
        this.scene.input.keyboard.on('keydown-E', ()=>{ 
			if (!this.canTarget) return;
			this.scene.scene.launch("TargetingScene", {
                onSelectionCb, 
                playerAmalgamations : this.playerAmalgamations,
                enemyAmalgamations : this.enemyAmalgamations,
            });
            this.scene.scene.pause("Level");
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
}

export {Core}