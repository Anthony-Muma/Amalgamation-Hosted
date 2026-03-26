
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
		const wooden_Table_Background = this.add.image(640, 368, "Wooden-Table-Background");
		wooden_Table_Background.scaleX = 1.1;

		// drawDeck1
		const drawDeck1 = this.add.image(1392, 176, "Card back");
		drawDeck1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck1.scaleX = 0.25;
		drawDeck1.scaleY = 0.25;

		// drawDeck2
		const drawDeck2 = this.add.image(1392, 400, "Card back");
		drawDeck2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck2.scaleX = 0.25;
		drawDeck2.scaleY = 0.25;

		// _200x280_Black_Blob_7
		const _200x280_Black_Blob_7 = this.add.image(80, 256, "200x280-Black-Blob");
		_200x280_Black_Blob_7.scaleX = 1.5;
		_200x280_Black_Blob_7.scaleY = 1.5;
		_200x280_Black_Blob_7.alpha = 0.5;
		_200x280_Black_Blob_7.alphaTopLeft = 0.5;
		_200x280_Black_Blob_7.alphaTopRight = 0.5;
		_200x280_Black_Blob_7.alphaBottomLeft = 0.5;
		_200x280_Black_Blob_7.alphaBottomRight = 0.5;
		_200x280_Black_Blob_7.tintTopLeft = 391937;

		// _200x280_Vital_Soul_Card
		const _200x280_Vital_Soul_Card = this.add.image(80, 240, "200x280-Vital-Soul-Card");

		// vignetteFx
		_200x280_Vital_Soul_Card.preFX.addVignette(0.5, 0.5, 0.34, 0.56);

		// placementsLeftText
		const placementsLeftText = this.add.text(640, 240, "", {});
		placementsLeftText.setOrigin(0.5, 0.5);
		placementsLeftText.text = "-/-";
		placementsLeftText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 24, "resolution": 3 });

		// drawDeck_2
		const drawDeck_2 = this.add.image(320, -112, "Card back");
		drawDeck_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_2.scaleX = 0.25;
		drawDeck_2.scaleY = 0.25;
		drawDeck_2.angle = -180;

		// energyPoolText
		const energyPoolText = this.add.text(80, 240, "", {});
		energyPoolText.setOrigin(0.5, 0.5);
		energyPoolText.text = "20";
		energyPoolText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 16 });

		// _500x200_Bar
		const _500x200_Bar = this.add.image(640, 672, "500x200-Bar");
		_500x200_Bar.scaleX = 5;
		_500x200_Bar.scaleY = 2.4;
		_500x200_Bar.visible = false;
		_500x200_Bar.tintTopLeft = 0;

		// handcard
		const handcard = this.add.image(640, 672, "200x280-Character-Card");
		handcard.scaleX = 0.8;
		handcard.scaleY = 0.8;
		handcard.visible = false;

		// _200x280_Character_Card_1
		const _200x280_Character_Card_1 = this.add.image(1872, 320, "200x280-Character-Card");
		_200x280_Character_Card_1.scaleX = 1.5;
		_200x280_Character_Card_1.scaleY = 3.063370076576077;

		// _200x280_Black_Blob
		const _200x280_Black_Blob = this.add.image(368, 416, "200x280-Black-Blob");
		_200x280_Black_Blob.scaleX = 1.5;
		_200x280_Black_Blob.scaleY = 1.2;

		// _200x280_Black_Blob_1
		const _200x280_Black_Blob_1 = this.add.image(368, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_1.scaleX = 1.5;
		_200x280_Black_Blob_1.scaleY = 1.2;

		// _200x280_Black_Blob_2
		const _200x280_Black_Blob_2 = this.add.image(640, 416, "200x280-Black-Blob");
		_200x280_Black_Blob_2.scaleX = 1.5;
		_200x280_Black_Blob_2.scaleY = 1.2;

		// _200x280_Black_Blob_3
		const _200x280_Black_Blob_3 = this.add.image(640, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_3.scaleX = 1.5;
		_200x280_Black_Blob_3.scaleY = 1.2;

		// _200x280_Black_Blob_4
		const _200x280_Black_Blob_4 = this.add.image(912, 416, "200x280-Black-Blob");
		_200x280_Black_Blob_4.scaleX = 1.5;
		_200x280_Black_Blob_4.scaleY = 1.2;

		// _200x280_Black_Blob_5
		const _200x280_Black_Blob_5 = this.add.image(912, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_5.scaleX = 1.5;
		_200x280_Black_Blob_5.scaleY = 1.2;

		// _100x100_Energy
		this.add.image(160, 240, "100x100-Energy");

		// particleemitter_1
		const particleemitter_1 = this.add.particles(-480, 224, "10x10-White-Blob", { scale: { start: 1, end: 0, ease: "Linear", random: false }, speed: { min: 20, max: 80, int: false }, quantity: 3, blendMode: 1, frequency: 40, gravityY: -30 });
		particleemitter_1.blendMode = Phaser.BlendModes.ADD;

		// _200x200_Black_Blob
		const _200x200_Black_Blob = this.add.image(640, 768, "200x200-Black-Blob");
		_200x200_Black_Blob.scaleX = 15;
		_200x200_Black_Blob.scaleY = 4;

		// _200x280_Black_Blob_6
		const _200x280_Black_Blob_6 = this.add.image(1744, 176, "200x280-Black-Blob");
		_200x280_Black_Blob_6.scaleX = 1.2;
		_200x280_Black_Blob_6.scaleY = 0.9;

		// _200x200_Black_Blob_1
		const _200x200_Black_Blob_1 = this.add.image(624, -288, "200x200-Black-Blob");
		_200x200_Black_Blob_1.scaleX = 15;
		_200x200_Black_Blob_1.scaleY = 4;

		// lists
		const list = [];

		this.drawDeck1 = drawDeck1;
		this.drawDeck2 = drawDeck2;
		this.placementsLeftText = placementsLeftText;
		this.drawDeck_2 = drawDeck_2;
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
