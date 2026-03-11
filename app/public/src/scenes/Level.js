
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { CardContainer } from "../modules/cardContainer.js"
import { materialContainer, soulContainer } from "../modules/cardContainers/index.js";
import { CardHand } from "../modules/level/cardHand.js";
import { Core } from "../modules/level/core.js";
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
		const table = this.add.image(0, -256, "Table");
		table.scaleY = 1.4073483651091703;
		table.setOrigin(0, 0);
		table.tintTopLeft = 16318464;
		table.tintTopRight = 16318464;

		// energyZone
		const energyZone = this.add.rectangle(1568, 352, 128, 128);
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
		const allCard = this.add.rectangle(1760, 368, 128, 128);
		allCard.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		allCard.isFilled = true;
		allCard.isStroked = true;
		allCard.strokeColor = 0;
		allCard.lineWidth = 12;

		// drawDeck1
		const drawDeck1 = this.add.image(1136, 128, "Card back");
		drawDeck1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck1.scaleX = 0.25;
		drawDeck1.scaleY = 0.25;

		// drawDeck2
		const drawDeck2 = this.add.image(1136, 368, "Card back");
		drawDeck2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck2.scaleX = 0.25;
		drawDeck2.scaleY = 0.25;

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
		const power_Soul_Card = this.add.image(864, -752, "Power Soul Card");
		power_Soul_Card.scaleX = 0.25;
		power_Soul_Card.scaleY = 0.25;

		// knowledge_Soul_Card
		const knowledge_Soul_Card = this.add.image(864, -528, "Knowledge Soul Card");
		knowledge_Soul_Card.scaleX = 0.25;
		knowledge_Soul_Card.scaleY = 0.25;

		// power_Soul_Card_1
		const power_Soul_Card_1 = this.add.image(640, -752, "Power Soul Card");
		power_Soul_Card_1.scaleX = 0.25;
		power_Soul_Card_1.scaleY = 0.25;

		// power_Soul_Card_2
		const power_Soul_Card_2 = this.add.image(416, -752, "Power Soul Card");
		power_Soul_Card_2.scaleX = 0.25;
		power_Soul_Card_2.scaleY = 0.25;

		// knowledge_Soul_Card_1
		const knowledge_Soul_Card_1 = this.add.image(640, -528, "Knowledge Soul Card");
		knowledge_Soul_Card_1.scaleX = 0.25;
		knowledge_Soul_Card_1.scaleY = 0.25;

		// knowledge_Soul_Card_2
		const knowledge_Soul_Card_2 = this.add.image(416, -528, "Knowledge Soul Card");
		knowledge_Soul_Card_2.scaleX = 0.25;
		knowledge_Soul_Card_2.scaleY = 0.25;

		// vital_Soul_Card
		const vital_Soul_Card = this.add.image(144, 256, "v2 Card Front");
		vital_Soul_Card.scaleX = 0.3;
		vital_Soul_Card.scaleY = 0.3;
		vital_Soul_Card.tintTopLeft = 261966;
		vital_Soul_Card.tintTopRight = 261966;
		vital_Soul_Card.tintBottomLeft = 261966;
		vital_Soul_Card.tintBottomRight = 261966;

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
		const text_5 = this.add.text(1520, 928, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "10p";
		text_5.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_7
		const text_7 = this.add.text(1584, 928, "", {});
		text_7.setOrigin(0.5, 0.5);
		text_7.text = "5e";
		text_7.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

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
		const white_silver_Card_Front_2 = this.add.image(1232, 944, "Character Card Background");
		white_silver_Card_Front_2.scaleX = 0.27;
		white_silver_Card_Front_2.scaleY = 0.27;

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
		white_silver_Card_Front_4.tintTopLeft = 1819968;
		white_silver_Card_Front_4.tintTopRight = 1819968;
		white_silver_Card_Front_4.tintBottomLeft = 1819968;
		white_silver_Card_Front_4.tintBottomRight = 1819968;

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
		white_silver_Card_Front_5.tintTopLeft = 16087147;
		white_silver_Card_Front_5.tintTopRight = 3700951;
		white_silver_Card_Front_5.tintBottomLeft = 1819968;
		white_silver_Card_Front_5.tintBottomRight = 1819968;

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
		text_19.setStyle({ "color": "#494e56ff", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

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
		white_silver_Card_Front_6.tintTopLeft = 3700951;
		white_silver_Card_Front_6.tintTopRight = 1819968;
		white_silver_Card_Front_6.tintBottomLeft = 3700951;
		white_silver_Card_Front_6.tintBottomRight = 1819968;

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

		// energyPoolText
		const energyPoolText = this.add.text(144, 256, "", {});
		energyPoolText.setOrigin(0.5, 0.5);
		energyPoolText.text = "0";
		energyPoolText.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 10 });

		// text_14
		const text_14 = this.add.text(1840, 704, "", {});
		text_14.setOrigin(0.5, 0.5);
		text_14.text = "DON'T DELETE";
		text_14.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 20 });

		// text_1
		const text_1 = this.add.text(1552, 960, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "3d";
		text_1.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// souless
		const souless = this.add.image(1232, 944, "Assassin");
		souless.scaleX = 0.15;
		souless.scaleY = 0.15;

		// shadowFx_1
		souless.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_12
		const white_silver_Card_Front_12 = this.add.image(368, 128, "Character Card Background");
		white_silver_Card_Front_12.scaleX = 0.27;
		white_silver_Card_Front_12.scaleY = 0.27;
		white_silver_Card_Front_12.tintTopLeft = 14483456;
		white_silver_Card_Front_12.tintTopRight = 14483456;
		white_silver_Card_Front_12.tintBottomLeft = 14483456;
		white_silver_Card_Front_12.tintBottomRight = 14483456;

		// white_silver_Card_Front_13
		const white_silver_Card_Front_13 = this.add.image(640, 128, "Character Card Background");
		white_silver_Card_Front_13.scaleX = 0.27;
		white_silver_Card_Front_13.scaleY = 0.27;
		white_silver_Card_Front_13.tintTopLeft = 14483456;
		white_silver_Card_Front_13.tintTopRight = 14483456;
		white_silver_Card_Front_13.tintBottomLeft = 14483456;
		white_silver_Card_Front_13.tintBottomRight = 14483456;

		// white_silver_Card_Front_14
		const white_silver_Card_Front_14 = this.add.image(912, 128, "Character Card Background");
		white_silver_Card_Front_14.scaleX = 0.27;
		white_silver_Card_Front_14.scaleY = 0.27;
		white_silver_Card_Front_14.tintTopLeft = 14483456;
		white_silver_Card_Front_14.tintTopRight = 14483456;
		white_silver_Card_Front_14.tintBottomLeft = 14483456;
		white_silver_Card_Front_14.tintBottomRight = 14483456;

		// knight_1
		const knight_1 = this.add.image(640, 112, "Knight");
		knight_1.scaleX = 0.15;
		knight_1.scaleY = 0.15;

		// shadowFx_4
		knight_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// technicolorFx_1
		const technicolorFx_1 = knight_1.preFX.addColorMatrix();
		technicolorFx_1.set([0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0, 0, 0, 1, 0]);

		// souless_1
		const souless_1 = this.add.image(912, 112, "Souless");
		souless_1.scaleX = 0.15;
		souless_1.scaleY = 0.15;

		// shadowFx_6
		souless_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// technicolorFx_2
		const technicolorFx_2 = souless_1.preFX.addColorMatrix();
		technicolorFx_2.set([0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0, 0, 0, 1, 0]);

		// text_27
		const text_27 = this.add.text(144, 416, "", {});
		text_27.setOrigin(0.5, 0.5);
		text_27.text = "3/3";
		text_27.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// drawDeck_5
		const drawDeck_5 = this.add.image(640, -112, "Card back");
		drawDeck_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_5.scaleX = 0.25;
		drawDeck_5.scaleY = 0.25;
		drawDeck_5.angle = -180;

		// drawDeck
		const drawDeck = this.add.image(800, -112, "Card back");
		drawDeck.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck.scaleX = 0.25;
		drawDeck.scaleY = 0.25;
		drawDeck.angle = -180;

		// drawDeck_1
		const drawDeck_1 = this.add.image(480, -112, "Card back");
		drawDeck_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_1.scaleX = 0.25;
		drawDeck_1.scaleY = 0.25;
		drawDeck_1.angle = -180;

		// drawDeck_2
		const drawDeck_2 = this.add.image(320, -112, "Card back");
		drawDeck_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_2.scaleX = 0.25;
		drawDeck_2.scaleY = 0.25;
		drawDeck_2.angle = -180;

		// drawDeck_3
		const drawDeck_3 = this.add.image(960, -112, "Card back");
		drawDeck_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_3.scaleX = 0.25;
		drawDeck_3.scaleY = 0.25;
		drawDeck_3.angle = -180;

		// rectangle_5
		const rectangle_5 = this.add.polygon(1168, 848, "32 0 64 32 32 64 0 32");
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 7145994;
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;
		rectangle_5.lineWidth = 3;

		// power_ama_2
		const power_ama_2 = this.add.text(1168, 848, "", {});
		power_ama_2.setOrigin(0.5, 0.5);
		power_ama_2.text = "0";
		power_ama_2.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_4
		const rectangle_4 = this.add.polygon(1296, 848, "32 64 4 32 0 20 2 12 8 6 16 4 24 4 28 8 32 14 36 8 40 4 48 4 56 6 62 12 64 20 60 32");
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 16087147;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 0;
		rectangle_4.lineWidth = 3;

		// health_ama_2
		const health_ama_2 = this.add.text(1296, 848, "", {});
		health_ama_2.setOrigin(0.5, 0.5);
		health_ama_2.text = "5";
		health_ama_2.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_27
		const rectangle_27 = this.add.polygon(1584, 528, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_27.isFilled = true;
		rectangle_27.fillColor = 3700951;
		rectangle_27.isStroked = true;
		rectangle_27.strokeColor = 0;
		rectangle_27.lineWidth = 3;

		// text_48
		const text_48 = this.add.text(1584, 528, "", {});
		text_48.setOrigin(0.5, 0.5);
		text_48.text = "10";
		text_48.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_28
		const rectangle_28 = this.add.polygon(1392, 560, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_28.isFilled = true;
		rectangle_28.fillColor = 3700951;
		rectangle_28.isStroked = true;
		rectangle_28.strokeColor = 0;
		rectangle_28.lineWidth = 3;

		// text_49
		const text_49 = this.add.text(1392, 560, "", {});
		text_49.setOrigin(0.5, 0.5);
		text_49.text = "?";
		text_49.setStyle({ "color": "#8a8484ff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_29
		const rectangle_29 = this.add.polygon(1408, 624, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_29.isFilled = true;
		rectangle_29.fillColor = 2565927;
		rectangle_29.isStroked = true;
		rectangle_29.strokeColor = 0;
		rectangle_29.lineWidth = 3;

		// rectangle_8
		const rectangle_8 = this.add.polygon(848, 32, "32 0 64 32 32 64 0 32");
		rectangle_8.isFilled = true;
		rectangle_8.fillColor = 7145994;
		rectangle_8.isStroked = true;
		rectangle_8.strokeColor = 0;
		rectangle_8.lineWidth = 3;

		// power_ene_2
		const power_ene_2 = this.add.text(848, 32, "", {});
		power_ene_2.setOrigin(0.5, 0.5);
		power_ene_2.text = "0";
		power_ene_2.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_12
		const rectangle_12 = this.add.polygon(976, 32, "32 64 4 32 0 20 2 12 8 6 16 4 24 4 28 8 32 14 36 8 40 4 48 4 56 6 62 12 64 20 60 32");
		rectangle_12.isFilled = true;
		rectangle_12.fillColor = 16087147;
		rectangle_12.isStroked = true;
		rectangle_12.strokeColor = 0;
		rectangle_12.lineWidth = 3;

		// health_ene_2
		const health_ene_2 = this.add.text(976, 32, "", {});
		health_ene_2.setOrigin(0.5, 0.5);
		health_ene_2.text = "5";
		health_ene_2.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_17
		const rectangle_17 = this.add.polygon(576, 32, "32 0 64 32 32 64 0 32");
		rectangle_17.isFilled = true;
		rectangle_17.fillColor = 7145994;
		rectangle_17.isStroked = true;
		rectangle_17.strokeColor = 0;
		rectangle_17.lineWidth = 3;

		// power_ene_1
		const power_ene_1 = this.add.text(576, 32, "", {});
		power_ene_1.setOrigin(0.5, 0.5);
		power_ene_1.text = "0";
		power_ene_1.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_18
		const rectangle_18 = this.add.polygon(704, 32, "32 64 4 32 0 20 2 12 8 6 16 4 24 4 28 8 32 14 36 8 40 4 48 4 56 6 62 12 64 20 60 32");
		rectangle_18.isFilled = true;
		rectangle_18.fillColor = 16087147;
		rectangle_18.isStroked = true;
		rectangle_18.strokeColor = 0;
		rectangle_18.lineWidth = 3;

		// health_ene_1
		const health_ene_1 = this.add.text(704, 32, "", {});
		health_ene_1.setOrigin(0.5, 0.5);
		health_ene_1.text = "5";
		health_ene_1.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_23
		const rectangle_23 = this.add.polygon(304, 32, "32 0 64 32 32 64 0 32");
		rectangle_23.isFilled = true;
		rectangle_23.fillColor = 7145994;
		rectangle_23.isStroked = true;
		rectangle_23.strokeColor = 0;
		rectangle_23.lineWidth = 3;

		// power_ene_0
		const power_ene_0 = this.add.text(304, 32, "", {});
		power_ene_0.setOrigin(0.5, 0.5);
		power_ene_0.text = "0";
		power_ene_0.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_24
		const rectangle_24 = this.add.polygon(432, 32, "32 64 4 32 0 20 2 12 8 6 16 4 24 4 28 8 32 14 36 8 40 4 48 4 56 6 62 12 64 20 60 32");
		rectangle_24.isFilled = true;
		rectangle_24.fillColor = 16087147;
		rectangle_24.isStroked = true;
		rectangle_24.strokeColor = 0;
		rectangle_24.lineWidth = 3;

		// health_ene_0
		const health_ene_0 = this.add.text(432, 32, "", {});
		health_ene_0.setOrigin(0.5, 0.5);
		health_ene_0.text = "5";
		health_ene_0.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// rectangle_33
		const rectangle_33 = this.add.polygon(1392, 400, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_33.isFilled = true;
		rectangle_33.fillColor = 3700951;
		rectangle_33.isStroked = true;
		rectangle_33.strokeColor = 0;
		rectangle_33.lineWidth = 3;

		// text_41
		const text_41 = this.add.text(1392, 400, "", {});
		text_41.setOrigin(0.5, 0.5);
		text_41.text = "? (10)";
		text_41.setStyle({ "color": "#8a8484ff", "fontFamily": "Eczar-Bold", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// power_Soul_Title_3
		const power_Soul_Title_3 = this.add.image(1232, 1024, "Assassin Title");
		power_Soul_Title_3.scaleX = 0.12;
		power_Soul_Title_3.scaleY = 0.12;

		// rectangle_22
		const rectangle_22 = this.add.polygon(1328, 992, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_22.isFilled = true;
		rectangle_22.fillColor = 2565927;
		rectangle_22.isStroked = true;
		rectangle_22.strokeColor = 0;
		rectangle_22.lineWidth = 3;

		// rectangle_25
		const rectangle_25 = this.add.polygon(1328, 944, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_25.isFilled = true;
		rectangle_25.fillColor = 2565927;
		rectangle_25.isStroked = true;
		rectangle_25.strokeColor = 0;
		rectangle_25.lineWidth = 3;

		// rectangle_37
		const rectangle_37 = this.add.polygon(1328, 896, "0 24 16 0 48 0 64 24 48 48 16 48");
		rectangle_37.isFilled = true;
		rectangle_37.fillColor = 3700951;
		rectangle_37.isStroked = true;
		rectangle_37.strokeColor = 0;
		rectangle_37.lineWidth = 3;

		// text_26
		const text_26 = this.add.text(1328, 896, "", {});
		text_26.setOrigin(0.5, 0.5);
		text_26.text = "12";
		text_26.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// wall_1
		const wall_1 = this.add.image(368, 112, "Wall");
		wall_1.scaleX = 0.15;
		wall_1.scaleY = 0.15;

		// shadowFx_8
		wall_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// desaturate_luminanceFx_5
		const desaturate_luminanceFx_5 = wall_1.preFX.addColorMatrix();
		desaturate_luminanceFx_5.set([0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0.2764723, 0.929708, 0.0938197, 0, -37.1, 0, 0, 0, 1, 0]);

		// power_Soul_Title_4
		const power_Soul_Title_4 = this.add.image(368, 208, "Wall Title");
		power_Soul_Title_4.scaleX = 0.12;
		power_Soul_Title_4.scaleY = 0.12;

		// power_Soul_Title_5
		const power_Soul_Title_5 = this.add.image(640, 208, "Knight Title");
		power_Soul_Title_5.scaleX = 0.12;
		power_Soul_Title_5.scaleY = 0.12;

		// power_Soul_Title_6
		const power_Soul_Title_6 = this.add.image(912, 208, "Assassin Title");
		power_Soul_Title_6.scaleX = 0.12;
		power_Soul_Title_6.scaleY = 0.12;

		// lists
		const list = [];

		this.energyZone = energyZone;
		this.powerZone = powerZone;
		this.defenseZone = defenseZone;
		this.allCard = allCard;
		this.drawDeck1 = drawDeck1;
		this.drawDeck2 = drawDeck2;
		this.energyPoolText = energyPoolText;
		this.drawDeck_5 = drawDeck_5;
		this.drawDeck = drawDeck;
		this.drawDeck_1 = drawDeck_1;
		this.drawDeck_2 = drawDeck_2;
		this.drawDeck_3 = drawDeck_3;
		this.power_ama_2 = power_ama_2;
		this.health_ama_2 = health_ama_2;
		this.health_ene_2 = health_ene_2;
		this.power_ene_1 = power_ene_1;
		this.health_ene_1 = health_ene_1;
		this.power_ene_0 = power_ene_0;
		this.health_ene_0 = health_ene_0;
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
	/** @type {Phaser.GameObjects.Image} */
	drawDeck1;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck2;
	/** @type {Phaser.GameObjects.Text} */
	energyPoolText;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_5;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_1;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_2;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_3;
	/** @type {Phaser.GameObjects.Text} */
	power_ama_2;
	/** @type {Phaser.GameObjects.Text} */
	health_ama_2;
	/** @type {Phaser.GameObjects.Text} */
	health_ene_2;
	/** @type {Phaser.GameObjects.Text} */
	power_ene_1;
	/** @type {Phaser.GameObjects.Text} */
	health_ene_1;
	/** @type {Phaser.GameObjects.Text} */
	power_ene_0;
	/** @type {Phaser.GameObjects.Text} */
	health_ene_0;
	/** @type {Array<any>} */
	list;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.sfx = {
			click: this.sound.add("click"),
			flip: this.sound.add("cardFlip"),
			hover: this.sound.add("hover"),
		}

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
		const core = new Core(this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
