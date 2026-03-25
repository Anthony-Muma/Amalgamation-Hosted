
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BuildTest extends Phaser.Scene {

	constructor() {
		super("BuildTest");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// arcane_Soul_Card
		const arcane_Soul_Card = this.add.image(1051, 568, "Arcane Soul Card");
		arcane_Soul_Card.scaleX = 0.25;
		arcane_Soul_Card.scaleY = 0.25;

		// arcane_Soul_Symbol
		const arcane_Soul_Symbol = this.add.image(1051, 536, "Arcane Soul Symbol");
		arcane_Soul_Symbol.scaleX = 0.15;
		arcane_Soul_Symbol.scaleY = 0.15;

		// arcane_Soul_Title
		const arcane_Soul_Title = this.add.image(1051, 616, "Arcane Soul Title");
		arcane_Soul_Title.scaleX = 0.15;
		arcane_Soul_Title.scaleY = 0.15;

		// white_silver_Card_Front
		const white_silver_Card_Front = this.add.image(571, 344, "White_silver Card Front");
		white_silver_Card_Front.scaleX = 0.25;
		white_silver_Card_Front.scaleY = 0.25;

		// nails_1
		const nails_1 = this.add.image(571, 328, "Nails");
		nails_1.scaleX = 0.15;
		nails_1.scaleY = 0.15;

		// shadowFx_9
		nails_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// text_5
		const text_5 = this.add.text(539, 392, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "10p";
		text_5.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_7
		const text_7 = this.add.text(603, 392, "", {});
		text_7.setOrigin(0.5, 0.5);
		text_7.text = "5e";
		text_7.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_8
		const text_8 = this.add.text(571, 264, "", {});
		text_8.setOrigin(0.5, 0.5);
		text_8.text = "NAILS";
		text_8.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// white_silver_Card_Front_3
		const white_silver_Card_Front_3 = this.add.image(731, 344, "White_silver Card Front");
		white_silver_Card_Front_3.scaleX = 0.25;
		white_silver_Card_Front_3.scaleY = 0.25;

		// text_2
		const text_2 = this.add.text(699, 392, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "3 POW";
		text_2.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_11
		const text_11 = this.add.text(763, 392, "", {});
		text_11.setOrigin(0.5, 0.5);
		text_11.text = "3 DEF";
		text_11.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_12
		const text_12 = this.add.text(731, 408, "", {});
		text_12.setOrigin(0.5, 0.5);
		text_12.text = "5 ENG";
		text_12.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_13
		const text_13 = this.add.text(731, 264, "", {});
		text_13.setOrigin(0.5, 0.5);
		text_13.text = "MUSHROOM";
		text_13.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// mushroom_2
		const mushroom_2 = this.add.image(731, 328, "Mushroom");
		mushroom_2.scaleX = 0.15;
		mushroom_2.scaleY = 0.15;

		// shadowFx_10
		mushroom_2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_4
		const white_silver_Card_Front_4 = this.add.image(891, 344, "White_silver Card Front");
		white_silver_Card_Front_4.scaleX = 0.25;
		white_silver_Card_Front_4.scaleY = 0.25;
		white_silver_Card_Front_4.tintTopLeft = 1819968;
		white_silver_Card_Front_4.tintTopRight = 1819968;
		white_silver_Card_Front_4.tintBottomLeft = 1819968;
		white_silver_Card_Front_4.tintBottomRight = 1819968;

		// text_16
		const text_16 = this.add.text(891, 392, "", {});
		text_16.setOrigin(0.5, 0.5);
		text_16.text = "15 ENG";
		text_16.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_17
		const text_17 = this.add.text(891, 264, "", {});
		text_17.setOrigin(0.5, 0.5);
		text_17.text = "CRYSTALS";
		text_17.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		text_17.setWordWrapWidth(1);

		// energy_Crystal_3X_3
		const energy_Crystal_3X_3 = this.add.image(891, 328, "Energy Crystal 3X");
		energy_Crystal_3X_3.scaleX = 0.15;
		energy_Crystal_3X_3.scaleY = 0.15;

		// shadowFx_7
		energy_Crystal_3X_3.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// white_silver_Card_Front_5
		const white_silver_Card_Front_5 = this.add.image(1051, 344, "White_silver Card Front");
		white_silver_Card_Front_5.scaleX = 0.25;
		white_silver_Card_Front_5.scaleY = 0.25;
		white_silver_Card_Front_5.tintTopLeft = 16087147;
		white_silver_Card_Front_5.tintTopRight = 3700951;
		white_silver_Card_Front_5.tintBottomLeft = 1819968;
		white_silver_Card_Front_5.tintBottomRight = 1819968;

		// text_18
		const text_18 = this.add.text(1019, 392, "", {});
		text_18.setOrigin(0.5, 0.5);
		text_18.text = "7 POW";
		text_18.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// wipeFx
		const wipeFx = text_18.preFX.addWipe(0.1, 0, 0);
		wipeFx.progress = 0.05;

		// text_19
		const text_19 = this.add.text(1083, 392, "", {});
		text_19.setOrigin(0.5, 0.5);
		text_19.text = "7 DEF";
		text_19.setStyle({ "color": "#494e56ff", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_20
		const text_20 = this.add.text(1051, 408, "", {});
		text_20.setOrigin(0.5, 0.5);
		text_20.text = "7 ENG";
		text_20.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_21
		const text_21 = this.add.text(1051, 264, "", {});
		text_21.setOrigin(0.5, 0.5);
		text_21.text = "LOG";
		text_21.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// chopped_Log
		const chopped_Log = this.add.image(1051, 328, "Chopped Log");
		chopped_Log.scaleX = 0.15;
		chopped_Log.scaleY = 0.15;

		// shadowFx_11
		chopped_Log.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// power_Soul_Card_3
		const power_Soul_Card_3 = this.add.image(571, 568, "Power Soul Card");
		power_Soul_Card_3.scaleX = 0.25;
		power_Soul_Card_3.scaleY = 0.25;

		// power_Soul_Symbol
		const power_Soul_Symbol = this.add.image(571, 536, "Power Soul Symbol");
		power_Soul_Symbol.scaleX = 0.15;
		power_Soul_Symbol.scaleY = 0.15;

		// power_Soul_Title
		const power_Soul_Title = this.add.image(571, 616, "Power Soul Title");
		power_Soul_Title.scaleX = 0.15;
		power_Soul_Title.scaleY = 0.15;

		// knowledge_Soul_Card_3
		const knowledge_Soul_Card_3 = this.add.image(731, 568, "Knowledge Soul Card");
		knowledge_Soul_Card_3.scaleX = 0.25;
		knowledge_Soul_Card_3.scaleY = 0.25;

		// knowledge_Soul_Symbol
		const knowledge_Soul_Symbol = this.add.image(731, 536, "Knowledge Soul Symbol");
		knowledge_Soul_Symbol.scaleX = 0.15;
		knowledge_Soul_Symbol.scaleY = 0.15;

		// knowledge_Soul_Title
		const knowledge_Soul_Title = this.add.image(731, 616, "Knowledge Soul Title");
		knowledge_Soul_Title.scaleX = 0.15;
		knowledge_Soul_Title.scaleY = 0.15;

		// protector_Soul_Card
		const protector_Soul_Card = this.add.image(891, 568, "Protector Soul Card");
		protector_Soul_Card.scaleX = 0.25;
		protector_Soul_Card.scaleY = 0.25;

		// protector_Soul_Symbol
		const protector_Soul_Symbol = this.add.image(891, 536, "Protector Soul Symbol");
		protector_Soul_Symbol.scaleX = 0.15;
		protector_Soul_Symbol.scaleY = 0.15;

		// protector_Soul_Title
		const protector_Soul_Title = this.add.image(891, 616, "Protector Soul Title");
		protector_Soul_Title.scaleX = 0.15;
		protector_Soul_Title.scaleY = 0.15;

		// vital_Soul_Card_1
		const vital_Soul_Card_1 = this.add.image(1211, 568, "Vital Soul Card");
		vital_Soul_Card_1.scaleX = 0.25;
		vital_Soul_Card_1.scaleY = 0.25;

		// vital_Soul_Symbol
		const vital_Soul_Symbol = this.add.image(1211, 536, "Vital Soul Symbol");
		vital_Soul_Symbol.scaleX = 0.15;
		vital_Soul_Symbol.scaleY = 0.15;

		// vital_Soul_Title
		const vital_Soul_Title = this.add.image(1211, 616, "Vital Soul Title");
		vital_Soul_Title.scaleX = 0.15;
		vital_Soul_Title.scaleY = 0.15;

		// white_silver_Card_Front_6
		const white_silver_Card_Front_6 = this.add.image(1211, 344, "White_silver Card Front");
		white_silver_Card_Front_6.scaleX = 0.25;
		white_silver_Card_Front_6.scaleY = 0.25;
		white_silver_Card_Front_6.tintTopLeft = 3700951;
		white_silver_Card_Front_6.tintTopRight = 1819968;
		white_silver_Card_Front_6.tintBottomLeft = 3700951;
		white_silver_Card_Front_6.tintBottomRight = 1819968;

		// text_23
		const text_23 = this.add.text(1195, 392, "", {});
		text_23.setOrigin(0.5, 0.5);
		text_23.text = "10 DEF";
		text_23.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_24
		const text_24 = this.add.text(1227, 408, "", {});
		text_24.setOrigin(0.5, 0.5);
		text_24.text = "10 ENG";
		text_24.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// text_25
		const text_25 = this.add.text(1211, 264, "", {});
		text_25.setOrigin(0.5, 0.5);
		text_25.text = "PILLOW";
		text_25.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		// pillow
		const pillow = this.add.image(1211, 328, "Pillow");
		pillow.scaleX = 0.15;
		pillow.scaleY = 0.15;

		// shadowFx_12
		pillow.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// text_14
		const text_14 = this.add.text(859, 168, "", {});
		text_14.setOrigin(0.5, 0.5);
		text_14.text = "DON'T DELETE";
		text_14.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 20 });

		// text_1
		const text_1 = this.add.text(571, 424, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "3d";
		text_1.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
