
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CardContainer } from "../modules/cardContainer.js"
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// table
		const table = this.add.image(0, 0, "Table");
		table.setOrigin(0, 0);

		// energyZone
		const energyZone = this.add.rectangle(1522, 384, 128, 128);
		energyZone.name = "energyZone";
		energyZone.isFilled = true;
		energyZone.fillColor = 1806860;

		// powerZone
		const powerZone = this.add.rectangle(1596, 192, 128, 128);
		powerZone.name = "powerZone";
		powerZone.isFilled = true;
		powerZone.fillColor = 9571340;

		// defenseZone
		const defenseZone = this.add.rectangle(1766, 195, 128, 128);
		defenseZone.name = "defenseZone";
		defenseZone.isFilled = true;
		defenseZone.fillColor = 798354;

		// allCard
		const allCard = this.add.rectangle(1751, 390, 128, 128);
		allCard.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		allCard.isFilled = true;
		allCard.isStroked = true;
		allCard.strokeColor = 0;
		allCard.lineWidth = 12;

		// card_back
		const card_back = this.add.image(1104, 144, "Card back");
		card_back.scaleX = 0.25;
		card_back.scaleY = 0.25;

		// card_back_9
		const card_back_9 = this.add.image(1104, 368, "Card back");
		card_back_9.scaleX = 0.25;
		card_back_9.scaleY = 0.25;

		// arcane_Soul_Card
		const arcane_Soul_Card = this.add.image(2032, 1104, "Arcane Soul Card");
		arcane_Soul_Card.scaleX = 0.25;
		arcane_Soul_Card.scaleY = 0.25;

		// arcane_Soul_Symbol
		const arcane_Soul_Symbol = this.add.image(2032, 1072, "Arcane Soul Symbol");
		arcane_Soul_Symbol.scaleX = 0.15;
		arcane_Soul_Symbol.scaleY = 0.15;

		// arcane_Soul_Title
		const arcane_Soul_Title = this.add.image(2032, 1152, "Arcane Soul Title");
		arcane_Soul_Title.scaleX = 0.15;
		arcane_Soul_Title.scaleY = 0.15;

		// power_Soul_Card
		const power_Soul_Card = this.add.image(864, -368, "Power Soul Card");
		power_Soul_Card.scaleX = 0.25;
		power_Soul_Card.scaleY = 0.25;

		// knowledge_Soul_Card
		const knowledge_Soul_Card = this.add.image(864, -144, "Knowledge Soul Card");
		knowledge_Soul_Card.scaleX = 0.25;
		knowledge_Soul_Card.scaleY = 0.25;

		// power_Soul_Card_1
		const power_Soul_Card_1 = this.add.image(640, -368, "Power Soul Card");
		power_Soul_Card_1.scaleX = 0.25;
		power_Soul_Card_1.scaleY = 0.25;

		// power_Soul_Card_2
		const power_Soul_Card_2 = this.add.image(416, -368, "Power Soul Card");
		power_Soul_Card_2.scaleX = 0.25;
		power_Soul_Card_2.scaleY = 0.25;

		// knowledge_Soul_Card_1
		const knowledge_Soul_Card_1 = this.add.image(640, -144, "Knowledge Soul Card");
		knowledge_Soul_Card_1.scaleX = 0.25;
		knowledge_Soul_Card_1.scaleY = 0.25;

		// knowledge_Soul_Card_2
		const knowledge_Soul_Card_2 = this.add.image(416, -144, "Knowledge Soul Card");
		knowledge_Soul_Card_2.scaleX = 0.25;
		knowledge_Soul_Card_2.scaleY = 0.25;

		// vital_Soul_Card
		const vital_Soul_Card = this.add.image(144, 256, "Vital Soul Card");
		vital_Soul_Card.scaleX = 0.3;
		vital_Soul_Card.scaleY = 0.3;

		// white_silver_Card_Front
		const white_silver_Card_Front = this.add.image(1552, 880, "White_silver Card Front");
		white_silver_Card_Front.scaleX = 0.25;
		white_silver_Card_Front.scaleY = 0.25;

		// nails_1
		const nails_1 = this.add.image(1552, 864, "Nails");
		nails_1.scaleX = 0.15;
		nails_1.scaleY = 0.15;

		// shadowFx_9
		nails_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// text_5
		const text_5 = this.add.text(1536, 928, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "10 POW";
		text_5.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_7
		const text_7 = this.add.text(1568, 944, "", {});
		text_7.setOrigin(0.5, 0.5);
		text_7.text = "5 ENG";
		text_7.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// white_silver_Card_Front_1
		const white_silver_Card_Front_1 = this.add.image(576, 960, "White_silver Card Front");
		white_silver_Card_Front_1.scaleX = 0.25;
		white_silver_Card_Front_1.scaleY = 0.25;

		// text
		const text = this.add.text(544, 1024, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "10 POW";
		text.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5 });

		// text_3
		const text_3 = this.add.text(608, 1040, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "10 ENG";
		text_3.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5 });

		// text_4
		const text_4 = this.add.text(576, 880, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "SWORD";
		text_4.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5 });

		// sword
		const sword = this.add.image(576, 944, "Sword");
		sword.scaleX = 0.15;
		sword.scaleY = 0.15;
		sword.angle = 30;

		// shadowFx_3
		sword.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_2
		const white_silver_Card_Front_2 = this.add.image(864, 368, "White_silver Card Front");
		white_silver_Card_Front_2.scaleX = 0.25;
		white_silver_Card_Front_2.scaleY = 0.25;
		white_silver_Card_Front_2.alpha = 0.2;
		white_silver_Card_Front_2.alphaTopLeft = 0.2;
		white_silver_Card_Front_2.alphaTopRight = 0.2;
		white_silver_Card_Front_2.alphaBottomLeft = 0.2;
		white_silver_Card_Front_2.alphaBottomRight = 0.2;

		// text_9
		const text_9 = this.add.text(752, 1024, "", {});
		text_9.setOrigin(0.5, 0.5);
		text_9.text = "10 ENG";
		text_9.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5 });

		// text_10
		const text_10 = this.add.text(752, 880, "", {});
		text_10.setOrigin(0.5, 0.5);
		text_10.text = "SWORD";
		text_10.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5 });

		// energy_Crystal_3X_2
		const energy_Crystal_3X_2 = this.add.image(1152, 1120, "Energy Crystal 3X");
		energy_Crystal_3X_2.scaleX = 0.15;
		energy_Crystal_3X_2.scaleY = 0.15;

		// shadowFx_5
		energy_Crystal_3X_2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// text_8
		const text_8 = this.add.text(1552, 800, "", {});
		text_8.setOrigin(0.5, 0.5);
		text_8.text = "NAILS";
		text_8.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// white_silver_Card_Front_3
		const white_silver_Card_Front_3 = this.add.image(1712, 880, "White_silver Card Front");
		white_silver_Card_Front_3.scaleX = 0.25;
		white_silver_Card_Front_3.scaleY = 0.25;

		// text_2
		const text_2 = this.add.text(1680, 928, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "3 POW";
		text_2.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_11
		const text_11 = this.add.text(1744, 928, "", {});
		text_11.setOrigin(0.5, 0.5);
		text_11.text = "3 DEF";
		text_11.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_12
		const text_12 = this.add.text(1712, 944, "", {});
		text_12.setOrigin(0.5, 0.5);
		text_12.text = "5 ENG";
		text_12.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_13
		const text_13 = this.add.text(1712, 800, "", {});
		text_13.setOrigin(0.5, 0.5);
		text_13.text = "MUSHROOM";
		text_13.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// mushroom_2
		const mushroom_2 = this.add.image(1712, 864, "Mushroom");
		mushroom_2.scaleX = 0.15;
		mushroom_2.scaleY = 0.15;

		// shadowFx_10
		mushroom_2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_4
		const white_silver_Card_Front_4 = this.add.image(1872, 880, "White_silver Card Front");
		white_silver_Card_Front_4.scaleX = 0.25;
		white_silver_Card_Front_4.scaleY = 0.25;

		// text_16
		const text_16 = this.add.text(1872, 928, "", {});
		text_16.setOrigin(0.5, 0.5);
		text_16.text = "15 ENG";
		text_16.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_17
		const text_17 = this.add.text(1872, 800, "", {});
		text_17.setOrigin(0.5, 0.5);
		text_17.text = "CRYSTALS";
		text_17.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		text_17.setWordWrapWidth(1);

		// energy_Crystal_3X_3
		const energy_Crystal_3X_3 = this.add.image(1872, 864, "Energy Crystal 3X");
		energy_Crystal_3X_3.scaleX = 0.15;
		energy_Crystal_3X_3.scaleY = 0.15;

		// shadowFx_7
		energy_Crystal_3X_3.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_5
		const white_silver_Card_Front_5 = this.add.image(2032, 880, "White_silver Card Front");
		white_silver_Card_Front_5.scaleX = 0.25;
		white_silver_Card_Front_5.scaleY = 0.25;

		// text_18
		const text_18 = this.add.text(2000, 928, "", {});
		text_18.setOrigin(0.5, 0.5);
		text_18.text = "7 POW";
		text_18.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// wipeFx
		const wipeFx = text_18.preFX.addWipe(0.1, 0, 0);
		wipeFx.progress = 0.05;

		// text_19
		const text_19 = this.add.text(2064, 928, "", {});
		text_19.setOrigin(0.5, 0.5);
		text_19.text = "7 DEF";
		text_19.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_20
		const text_20 = this.add.text(2032, 944, "", {});
		text_20.setOrigin(0.5, 0.5);
		text_20.text = "7 ENG";
		text_20.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_21
		const text_21 = this.add.text(2032, 800, "", {});
		text_21.setOrigin(0.5, 0.5);
		text_21.text = "LOG";
		text_21.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// chopped_Log
		const chopped_Log = this.add.image(2032, 864, "Chopped Log");
		chopped_Log.scaleX = 0.15;
		chopped_Log.scaleY = 0.15;

		// shadowFx_11
		chopped_Log.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// power_Soul_Card_3
		const power_Soul_Card_3 = this.add.image(1552, 1104, "Power Soul Card");
		power_Soul_Card_3.scaleX = 0.25;
		power_Soul_Card_3.scaleY = 0.25;

		// power_Soul_Symbol
		const power_Soul_Symbol = this.add.image(1552, 1072, "Power Soul Symbol");
		power_Soul_Symbol.scaleX = 0.15;
		power_Soul_Symbol.scaleY = 0.15;

		// power_Soul_Title
		const power_Soul_Title = this.add.image(1552, 1152, "Power Soul Title");
		power_Soul_Title.scaleX = 0.15;
		power_Soul_Title.scaleY = 0.15;

		// knowledge_Soul_Card_3
		const knowledge_Soul_Card_3 = this.add.image(1712, 1104, "Knowledge Soul Card");
		knowledge_Soul_Card_3.scaleX = 0.25;
		knowledge_Soul_Card_3.scaleY = 0.25;

		// knowledge_Soul_Symbol
		const knowledge_Soul_Symbol = this.add.image(1712, 1072, "Knowledge Soul Symbol");
		knowledge_Soul_Symbol.scaleX = 0.15;
		knowledge_Soul_Symbol.scaleY = 0.15;

		// knowledge_Soul_Title
		const knowledge_Soul_Title = this.add.image(1712, 1152, "Knowledge Soul Title");
		knowledge_Soul_Title.scaleX = 0.15;
		knowledge_Soul_Title.scaleY = 0.15;

		// protector_Soul_Card
		const protector_Soul_Card = this.add.image(1872, 1104, "Protector Soul Card");
		protector_Soul_Card.scaleX = 0.25;
		protector_Soul_Card.scaleY = 0.25;

		// protector_Soul_Symbol
		const protector_Soul_Symbol = this.add.image(1872, 1072, "Protector Soul Symbol");
		protector_Soul_Symbol.scaleX = 0.15;
		protector_Soul_Symbol.scaleY = 0.15;

		// protector_Soul_Title
		const protector_Soul_Title = this.add.image(1872, 1152, "Protector Soul Title");
		protector_Soul_Title.scaleX = 0.15;
		protector_Soul_Title.scaleY = 0.15;

		// vital_Soul_Card_1
		const vital_Soul_Card_1 = this.add.image(2192, 1104, "Vital Soul Card");
		vital_Soul_Card_1.scaleX = 0.25;
		vital_Soul_Card_1.scaleY = 0.25;

		// vital_Soul_Symbol
		const vital_Soul_Symbol = this.add.image(2192, 1072, "Vital Soul Symbol");
		vital_Soul_Symbol.scaleX = 0.15;
		vital_Soul_Symbol.scaleY = 0.15;

		// vital_Soul_Title
		const vital_Soul_Title = this.add.image(2192, 1152, "Vital Soul Title");
		vital_Soul_Title.scaleX = 0.15;
		vital_Soul_Title.scaleY = 0.15;

		// white_silver_Card_Front_6
		const white_silver_Card_Front_6 = this.add.image(2192, 880, "White_silver Card Front");
		white_silver_Card_Front_6.scaleX = 0.25;
		white_silver_Card_Front_6.scaleY = 0.25;

		// text_23
		const text_23 = this.add.text(2176, 928, "", {});
		text_23.setOrigin(0.5, 0.5);
		text_23.text = "10 DEF";
		text_23.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_24
		const text_24 = this.add.text(2208, 944, "", {});
		text_24.setOrigin(0.5, 0.5);
		text_24.text = "10 ENG";
		text_24.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_25
		const text_25 = this.add.text(2192, 800, "", {});
		text_25.setOrigin(0.5, 0.5);
		text_25.text = "PILLOW";
		text_25.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// pillow
		const pillow = this.add.image(2192, 864, "Pillow");
		pillow.scaleX = 0.15;
		pillow.scaleY = 0.15;

		// shadowFx_12
		pillow.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_7
		const white_silver_Card_Front_7 = this.add.image(640, 368, "White_silver Card Front");
		white_silver_Card_Front_7.scaleX = 0.25;
		white_silver_Card_Front_7.scaleY = 0.25;
		white_silver_Card_Front_7.alpha = 0.2;
		white_silver_Card_Front_7.alphaTopLeft = 0.2;
		white_silver_Card_Front_7.alphaTopRight = 0.2;
		white_silver_Card_Front_7.alphaBottomLeft = 0.2;
		white_silver_Card_Front_7.alphaBottomRight = 0.2;

		// white_silver_Card_Front_8
		const white_silver_Card_Front_8 = this.add.image(416, 368, "White_silver Card Front");
		white_silver_Card_Front_8.scaleX = 0.25;
		white_silver_Card_Front_8.scaleY = 0.25;
		white_silver_Card_Front_8.alpha = 0.2;
		white_silver_Card_Front_8.alphaTopLeft = 0.2;
		white_silver_Card_Front_8.alphaTopRight = 0.2;
		white_silver_Card_Front_8.alphaBottomLeft = 0.2;
		white_silver_Card_Front_8.alphaBottomRight = 0.2;

		// white_silver_Card_Front_9
		const white_silver_Card_Front_9 = this.add.image(864, 144, "White_silver Card Front");
		white_silver_Card_Front_9.scaleX = 0.25;
		white_silver_Card_Front_9.scaleY = 0.25;
		white_silver_Card_Front_9.alpha = 0.2;
		white_silver_Card_Front_9.alphaTopLeft = 0.2;
		white_silver_Card_Front_9.alphaTopRight = 0.2;
		white_silver_Card_Front_9.alphaBottomLeft = 0.2;
		white_silver_Card_Front_9.alphaBottomRight = 0.2;

		// white_silver_Card_Front_10
		const white_silver_Card_Front_10 = this.add.image(640, 144, "White_silver Card Front");
		white_silver_Card_Front_10.scaleX = 0.25;
		white_silver_Card_Front_10.scaleY = 0.25;
		white_silver_Card_Front_10.alpha = 0.2;
		white_silver_Card_Front_10.alphaTopLeft = 0.2;
		white_silver_Card_Front_10.alphaTopRight = 0.2;
		white_silver_Card_Front_10.alphaBottomLeft = 0.2;
		white_silver_Card_Front_10.alphaBottomRight = 0.2;

		// white_silver_Card_Front_11
		const white_silver_Card_Front_11 = this.add.image(416, 144, "White_silver Card Front");
		white_silver_Card_Front_11.scaleX = 0.25;
		white_silver_Card_Front_11.scaleY = 0.25;
		white_silver_Card_Front_11.alpha = 0.2;
		white_silver_Card_Front_11.alphaTopLeft = 0.2;
		white_silver_Card_Front_11.alphaTopRight = 0.2;
		white_silver_Card_Front_11.alphaBottomLeft = 0.2;
		white_silver_Card_Front_11.alphaBottomRight = 0.2;

		// text_6
		const text_6 = this.add.text(144, 416, "", {});
		text_6.setOrigin(0.5, 0.5);
		text_6.text = "0/50";
		text_6.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 10 });

		// text_14
		const text_14 = this.add.text(1840, 704, "", {});
		text_14.setOrigin(0.5, 0.5);
		text_14.text = "DON'T DELETE";
		text_14.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 20 });

		// lists
		const list = [];

		this.energyZone = energyZone;
		this.powerZone = powerZone;
		this.defenseZone = defenseZone;
		this.allCard = allCard;
		this.list = list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	energyZone;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerZone;
	/** @type {Phaser.GameObjects.Rectangle} */
	defenseZone;
	/** @type {Phaser.GameObjects.Rectangle} */
	allCard;
	/** @type {Array<any>} */
	list;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.playerHand = [];

		const zones = [this.defenseZone, this.powerZone, this.energyZone]
		this.allCard.on("pointerover", ()=>{
			console.log("hover")
			for (let zone of zones) {
				zone.setAlpha(0.5)
			}
		})

		this.allCard.on("pointerout", ()=>{
			console.log("hover")
			for (let zone of zones) {
				zone.setAlpha(1)
			}
		})

		this.setupDrawPile(this.drawDeck1, "log");
		this.setupDrawPile(this.drawDeck2, "crystal");




		const testCardInfo1 = {
			cardKey : 0,
			card : {
				energyValue: 7,
				attackValue: 7,
				defenseValue: 7,
				name: 'log',
				type: 'material'
			}
		}

		const testCardInfo2 = {
			cardKey : 0,
			card : {
				energyValue: 10,
				attackValue: 10,
				defenseValue: 10,
				name: 'pillow',
				type: 'material'
			}
		}

		const testCardInfo3 = {
			cardKey : 0,
			card : {
				energyValue: 15,
				attackValue: 2,
				defenseValue: 2,
				name: 'crystal',
				type: 'material'
			}
		}

		this.test = new CardContainer(this, 500, 500, testCardInfo1);
		this.test2 = new CardContainer(this, 600, 500, testCardInfo2);
		this.test3 = new CardContainer(this, 700, 500, testCardInfo3); 
		// this.test.flipAnimation();
		this.test.on("dragend", () => {
            this.test.flipAnimation();
        });

        this.test2.on("dragend", () => {
            // this.test2.evaporateAnimation();
			this.test2.flipAnimation();
        });

		this.test3.on("dragend", () => {
            this.test3.flipAnimation();
        });

		// const card = new CardContainer(this, 500, 200, cardInfo1);

		// card.on("dragstart", ()=> {
		// 	card.focus()
		// })
		// card.on("dragend", () => {
        //     // this.test2.evaporateAnimation();
		// 	card.flipAnimation();
        // });
		// card.flipAnimation()
		// card.evaporateAnimation()

	}

	/* -------------------------------------------------------------------------- */
	/*                                Player Hand                                 */
	/* -------------------------------------------------------------------------- */

	setupDrawPile(pile, cardName) {
		pile.setInteractive();
		pile.on("pointerover", () => pile.setTint(0xddddff));
		pile.on("pointerout", () => pile.clearTint());
		pile.on("pointerdown", () => {
			pile.clearTint();
			this.drawCard(cardName, pile);
		});
	}

	getCardStats(name) {
		const stats = {
			log: { energyValue: 7, attackValue: 7, defenseValue: 7 },
			crystal: { energyValue: 15, attackValue: 0, defenseValue: 0 },
		};
		return stats[name] || { energyValue: 0, attackValue: 0, defenseValue: 0 };
	}

	drawCard(cardName, pile) {
		const stats = this.getCardStats(cardName);
		const cardInfo = {
			cardKey: this.playerHand.length,
			card: {
				name:         cardName,
				type:         "material",
				energyValue:  stats.energyValue,
				attackValue:  stats.attackValue,
				defenseValue: stats.defenseValue,
			}
		};

		// Spawn at the deck position so the card appears to come from there
		const card = new CardContainer(this, pile.x, pile.y, cardInfo);
		card.disableInteractive();
		this.playerHand.push(card);
		this.layoutHand(card);
	}

	layoutHand(newCard) {
		const SPACING = 160;
    	const ANCHOR_X = 640;
    	const HAND_Y = 592;

    	const count = this.playerHand.length;

    	const totalWidth = (count - 1) * SPACING;
    	const startX = ANCHOR_X - totalWidth / 2;

    	this.playerHand.forEach((card, i) => {
        	const targetX = startX + i * SPACING;
        	const isNew = card === newCard;

        	this.tweens.add({
            	targets:  card,
            	x:        targetX,
            	y:        HAND_Y,
            	duration: isNew ? 350 : 200,
            	ease:     isNew ? "Back.easeOut" : "Quad.easeOut",
            	onComplete: () => {
					if (isNew) {
						if (!card.isFaceUp) card.flipAnimation();
						card.setInteractive(
							new Phaser.Geom.Rectangle(0, 0, 150, 210),
							Phaser.Geom.Rectangle.Contains
						);
						this.setupCardClick(card);
					}
				}
        	});
    	});
	}

	setupCardClick(card) {
		card.on("pointerdown", () => {
			const index = this.playerHand.indexOf(card);
			if (index === -1) return; // Card already removed

			// Remove from hand immediately so layoutHand recalculates without it
			this.playerHand.splice(index, 1);

			card.disableInteractive();
			card.evaporateAnimation();

			// Reshift the remaining cards (pass null since no card is "new")
			this.layoutHand(null);
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
