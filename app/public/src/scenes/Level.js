
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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

		// wooden_Table_Background
		const wooden_Table_Background = this.add.image(640, 32, "Wooden-Table-Background");
		wooden_Table_Background.tintTopLeft = 0;
		wooden_Table_Background.tintTopRight = 0;

		// drawDeck1
		const drawDeck1 = this.add.image(1344, -48, "Card back");
		drawDeck1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck1.scaleX = 0.25;
		drawDeck1.scaleY = 0.25;

		// drawDeck2
		const drawDeck2 = this.add.image(1376, 224, "Card back");
		drawDeck2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck2.scaleX = 0.25;
		drawDeck2.scaleY = 0.25;

		// _200x280_Vital_Soul_Card
		this.add.image(-304, 288, "200x280-Vital-Soul-Card");

		// placementsLeftText
		const placementsLeftText = this.add.text(144, 448, "", {});
		placementsLeftText.setOrigin(0.5, 0.5);
		placementsLeftText.text = "-/-";
		placementsLeftText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 24, "resolution": 3 });

		// drawDeck_2
		const drawDeck_2 = this.add.image(320, -112, "Card back");
		drawDeck_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_2.scaleX = 0.25;
		drawDeck_2.scaleY = 0.25;
		drawDeck_2.angle = -180;

		// text
		const text = this.add.text(1168, 256, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Placement\nCounter";
		text.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 24, "resolution": 3 });

		// _200x200_Energy_Crystals_3X
		const _200x200_Energy_Crystals_3X = this.add.image(160, 272, "200x200-Energy-Crystals-3X");
		_200x200_Energy_Crystals_3X.scaleX = 1.5;
		_200x200_Energy_Crystals_3X.scaleY = 1.5;

		// energyPoolText
		const energyPoolText = this.add.text(144, 288, "", {});
		energyPoolText.setOrigin(0.5, 0.5);
		energyPoolText.text = "0";
		energyPoolText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 10 });

		// _200x280_Character_Card
		const _200x280_Character_Card = this.add.image(640, 608, "200x280-Character-Card");
		_200x280_Character_Card.scaleX = 0.8;
		_200x280_Character_Card.scaleY = 0.8;

		// _200x280_Character_Card_1
		const _200x280_Character_Card_1 = this.add.image(1872, 320, "200x280-Character-Card");
		_200x280_Character_Card_1.scaleX = 1.5;
		_200x280_Character_Card_1.scaleY = 3.063370076576077;

		// _200x280_Character_Card_2
		const _200x280_Character_Card_2 = this.add.image(640, 368, "200x280-Character-Card");
		_200x280_Character_Card_2.scaleX = 0.8;
		_200x280_Character_Card_2.scaleY = 0.8;

		// _200x280_Character_Card_3
		const _200x280_Character_Card_3 = this.add.image(640, 128, "200x280-Character-Card");
		_200x280_Character_Card_3.scaleX = 0.8;
		_200x280_Character_Card_3.scaleY = 0.8;

		// lists
		const list = [];

		this.drawDeck1 = drawDeck1;
		this.drawDeck2 = drawDeck2;
		this.placementsLeftText = placementsLeftText;
		this.drawDeck_2 = drawDeck_2;
		this.text = text;
		this.energyPoolText = energyPoolText;
		this.list = list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	drawDeck1;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck2;
	/** @type {Phaser.GameObjects.Text} */
	placementsLeftText;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_2;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	energyPoolText;
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

		const core = new Core(this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
