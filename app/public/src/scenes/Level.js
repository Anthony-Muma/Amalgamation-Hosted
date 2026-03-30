
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
		wooden_Table_Background.tintBottomLeft = 0;
		wooden_Table_Background.tintBottomRight = 0;

		// drawDeck1
		const drawDeck1 = this.add.image(-928, -48, "Card back");
		drawDeck1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck1.scaleX = 0.25;
		drawDeck1.scaleY = 0.25;

		// drawDeck2
		const drawDeck2 = this.add.image(-1088, -48, "Card back");
		drawDeck2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck2.scaleX = 0.25;
		drawDeck2.scaleY = 0.25;

		// _200x280_Black_Blob_7
		const _200x280_Black_Blob_7 = this.add.image(16, 224, "200x280-Black-Blob");
		_200x280_Black_Blob_7.scaleX = 1.5;
		_200x280_Black_Blob_7.scaleY = 1.5;
		_200x280_Black_Blob_7.alpha = 0.4;
		_200x280_Black_Blob_7.alphaTopLeft = 0.4;
		_200x280_Black_Blob_7.alphaTopRight = 0.4;
		_200x280_Black_Blob_7.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_7.alphaBottomRight = 0.4;

		// _200x280_Vital_Soul_Card
		const _200x280_Vital_Soul_Card = this.add.image(16, 224, "200x280-Vital-Soul-Card");

		// vignetteFx
		_200x280_Vital_Soul_Card.preFX.addVignette(0.5, 0.5, 0.34, 0.56);

		// _200x200_Black_Blob
		const _200x200_Black_Blob = this.add.image(624, -384, "200x200-Black-Blob");
		_200x200_Black_Blob.scaleX = 15;
		_200x200_Black_Blob.scaleY = 3;
		_200x200_Black_Blob.alpha = 0.41;
		_200x200_Black_Blob.alphaTopLeft = 0.41;
		_200x200_Black_Blob.alphaTopRight = 0.41;
		_200x200_Black_Blob.alphaBottomLeft = 0.41;
		_200x200_Black_Blob.alphaBottomRight = 0.41;

		// drawDeck_2
		const drawDeck_2 = this.add.image(640, -208, "Card back");
		drawDeck_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_2.scaleX = 0.25;
		drawDeck_2.scaleY = 0.25;

		// particleemitter_1
		const particleemitter_1 = this.add.particles(-496, 224, "10x10-White-Blob", { scale: { start: 5, end: 0, ease: "Linear", random: false }, speed: { min: 20, max: 80, int: false }, quantity: 3, tint: 9306004, blendMode: 1, frequency: 40, gravityY: -30 });
		particleemitter_1.blendMode = Phaser.BlendModes.ADD;

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

		// _200x280_Black_Blob
		const _200x280_Black_Blob = this.add.image(368, 416, "200x280-Black-Blob");
		_200x280_Black_Blob.scaleX = 1.5;
		_200x280_Black_Blob.scaleY = 1.2;
		_200x280_Black_Blob.alpha = 0.4;
		_200x280_Black_Blob.alphaTopLeft = 0.4;
		_200x280_Black_Blob.alphaTopRight = 0.4;
		_200x280_Black_Blob.alphaBottomLeft = 0.4;
		_200x280_Black_Blob.alphaBottomRight = 0.4;

		// _200x280_Black_Blob_1
		const _200x280_Black_Blob_1 = this.add.image(368, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_1.scaleX = 1.5;
		_200x280_Black_Blob_1.scaleY = 1.2;
		_200x280_Black_Blob_1.alpha = 0.4;
		_200x280_Black_Blob_1.alphaTopLeft = 0.4;
		_200x280_Black_Blob_1.alphaTopRight = 0.4;
		_200x280_Black_Blob_1.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_1.alphaBottomRight = 0.4;

		// _200x280_Black_Blob_2
		const _200x280_Black_Blob_2 = this.add.image(640, 416, "200x280-Black-Blob");
		_200x280_Black_Blob_2.scaleX = 1.5;
		_200x280_Black_Blob_2.scaleY = 1.2;
		_200x280_Black_Blob_2.alpha = 0.4;
		_200x280_Black_Blob_2.alphaTopLeft = 0.4;
		_200x280_Black_Blob_2.alphaTopRight = 0.4;
		_200x280_Black_Blob_2.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_2.alphaBottomRight = 0.4;

		// _200x280_Black_Blob_3
		const _200x280_Black_Blob_3 = this.add.image(640, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_3.scaleX = 1.5;
		_200x280_Black_Blob_3.scaleY = 1.2;
		_200x280_Black_Blob_3.alpha = 0.4;
		_200x280_Black_Blob_3.alphaTopLeft = 0.4;
		_200x280_Black_Blob_3.alphaTopRight = 0.4;
		_200x280_Black_Blob_3.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_3.alphaBottomRight = 0.4;

		// _200x280_Black_Blob_4
		const _200x280_Black_Blob_4 = this.add.image(912, 416, "200x280-Black-Blob");
		_200x280_Black_Blob_4.scaleX = 1.5;
		_200x280_Black_Blob_4.scaleY = 1.2;
		_200x280_Black_Blob_4.alpha = 0.4;
		_200x280_Black_Blob_4.alphaTopLeft = 0.4;
		_200x280_Black_Blob_4.alphaTopRight = 0.4;
		_200x280_Black_Blob_4.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_4.alphaBottomRight = 0.4;

		// _200x280_Black_Blob_5
		const _200x280_Black_Blob_5 = this.add.image(912, 64, "200x280-Black-Blob");
		_200x280_Black_Blob_5.scaleX = 1.5;
		_200x280_Black_Blob_5.scaleY = 1.2;
		_200x280_Black_Blob_5.alpha = 0.4;
		_200x280_Black_Blob_5.alphaTopLeft = 0.4;
		_200x280_Black_Blob_5.alphaTopRight = 0.4;
		_200x280_Black_Blob_5.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_5.alphaBottomRight = 0.4;

		// _100x100_Energy
		this.add.image(-368, 224, "100x100-Energy");

		// _200x200_Black_Blob_1
		const _200x200_Black_Blob_1 = this.add.image(640, 928, "200x200-Black-Blob");
		_200x200_Black_Blob_1.scaleX = 15;
		_200x200_Black_Blob_1.scaleY = 3;
		_200x200_Black_Blob_1.alpha = 0.41;
		_200x200_Black_Blob_1.alphaTopLeft = 0.41;
		_200x200_Black_Blob_1.alphaTopRight = 0.41;
		_200x200_Black_Blob_1.alphaBottomLeft = 0.41;
		_200x200_Black_Blob_1.alphaBottomRight = 0.41;

		// _200x280_Black_Blob_8
		const _200x280_Black_Blob_8 = this.add.image(1296, 224, "200x280-Black-Blob");
		_200x280_Black_Blob_8.scaleX = 2;
		_200x280_Black_Blob_8.scaleY = 1.2;
		_200x280_Black_Blob_8.alpha = 0.4;
		_200x280_Black_Blob_8.alphaTopLeft = 0.4;
		_200x280_Black_Blob_8.alphaTopRight = 0.4;
		_200x280_Black_Blob_8.alphaBottomLeft = 0.4;
		_200x280_Black_Blob_8.alphaBottomRight = 0.4;

		// _200x200_Pillow
		const _200x200_Pillow = this.add.image(1232, 192, "200x200-Pillow");
		_200x200_Pillow.alpha = 0.9;
		_200x200_Pillow.alphaTopLeft = 0.9;
		_200x200_Pillow.alphaTopRight = 0.9;
		_200x200_Pillow.alphaBottomLeft = 0.9;
		_200x200_Pillow.alphaBottomRight = 0.9;

		// _200x200_Bomb
		const _200x200_Bomb = this.add.image(1312, 192, "200x200-Bomb");
		_200x200_Bomb.alpha = 0.9;
		_200x200_Bomb.alphaTopLeft = 0.9;
		_200x200_Bomb.alphaTopRight = 0.9;
		_200x200_Bomb.alphaBottomLeft = 0.9;
		_200x200_Bomb.alphaBottomRight = 0.9;

		// _200x200_Chopped_Log
		const _200x200_Chopped_Log = this.add.image(1232, 256, "200x200-Chopped-Log");
		_200x200_Chopped_Log.alpha = 0.9;
		_200x200_Chopped_Log.alphaTopLeft = 0.9;
		_200x200_Chopped_Log.alphaTopRight = 0.9;
		_200x200_Chopped_Log.alphaBottomLeft = 0.9;
		_200x200_Chopped_Log.alphaBottomRight = 0.9;

		// _200x200_Brick
		const _200x200_Brick = this.add.image(1296, 272, "200x200-Brick");
		_200x200_Brick.alpha = 0.9;
		_200x200_Brick.alphaTopLeft = 0.9;
		_200x200_Brick.alphaTopRight = 0.9;
		_200x200_Brick.alphaBottomLeft = 0.9;
		_200x200_Brick.alphaBottomRight = 0.9;

		// _200x200_Clock
		const _200x200_Clock = this.add.image(1376, 240, "200x200-Clock");
		_200x200_Clock.alpha = 0.9;
		_200x200_Clock.alphaTopLeft = 0.9;
		_200x200_Clock.alphaTopRight = 0.9;
		_200x200_Clock.alphaBottomLeft = 0.9;
		_200x200_Clock.alphaBottomRight = 0.9;

		// energyPoolText
		const energyPoolText = this.add.text(16, 224, "", {});
		energyPoolText.setOrigin(0.5, 0.5);
		energyPoolText.text = "20";
		energyPoolText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 16 });

		// placementsLeftText
		const placementsLeftText = this.add.text(640, 224, "", {});
		placementsLeftText.setOrigin(0.5, 0.5);
		placementsLeftText.text = "-/-";
		placementsLeftText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 24, "resolution": 3 });

		// drawDeck
		const drawDeck = this.add.image(800, -208, "Card back");
		drawDeck.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck.scaleX = 0.25;
		drawDeck.scaleY = 0.25;

		// drawDeck_1
		const drawDeck_1 = this.add.image(480, -208, "Card back");
		drawDeck_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_1.scaleX = 0.25;
		drawDeck_1.scaleY = 0.25;

		// drawDeck_3
		const drawDeck_3 = this.add.image(320, -208, "Card back");
		drawDeck_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_3.scaleX = 0.25;
		drawDeck_3.scaleY = 0.25;

		// drawDeck_4
		const drawDeck_4 = this.add.image(960, -208, "Card back");
		drawDeck_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		drawDeck_4.scaleX = 0.25;
		drawDeck_4.scaleY = 0.25;

		// damageStampIcon
		const damageStampIcon = this.add.image(2336, 704, "100x100-Power");
		damageStampIcon.scaleX = 3;
		damageStampIcon.scaleY = 3;
		damageStampIcon.tintTopLeft = 15597568;
		damageStampIcon.tintTopRight = 15597568;
		damageStampIcon.tintBottomLeft = 15597568;
		damageStampIcon.tintBottomRight = 15597568;

		// shadowFx_1
		damageStampIcon.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// defenseFlipIcon
		const defenseFlipIcon = this.add.image(2512, 368, "100x100-Blue-Shield");
		defenseFlipIcon.scaleX = 3;
		defenseFlipIcon.scaleY = 3;

		// wipeFx
		const wipeFx = defenseFlipIcon.preFX.addWipe(1.54, 0, 0);
		wipeFx.progress = 1;
		wipeFx.reveal = true;

		// shadowFx
		defenseFlipIcon.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// particleemitter_2
		const particleemitter_2 = this.add.particles(2064, 368, "10x10-White-Blob", { scale: { start: 5, end: 0, ease: "Linear", random: false }, speed: { min: 20, max: 80, int: false }, quantity: 3, tint: 9306004, blendMode: 1, frequency: 40, gravityY: -30 });
		particleemitter_2.blendMode = Phaser.BlendModes.ADD;

		// damageStampText
		const damageStampText = this.add.text(2336, 704, "", {});
		damageStampText.scaleX = 3;
		damageStampText.scaleY = 3;
		damageStampText.setOrigin(0.5, 0.5);
		damageStampText.tintTopLeft = 16711680;
		damageStampText.text = "5";
		damageStampText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 8, "resolution": 3 });

		// defenseFlipText
		const defenseFlipText = this.add.text(2512, 368, "", {});
		defenseFlipText.scaleX = 3;
		defenseFlipText.scaleY = 3;
		defenseFlipText.setOrigin(0.5, 0.5);
		defenseFlipText.tintTopLeft = 15794176;
		defenseFlipText.text = "?";
		defenseFlipText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 8, "resolution": 3 });

		// directDamageIcon
		const directDamageIcon = this.add.image(2256, 192, "100x100-Red-Heart");
		directDamageIcon.scaleX = 3;
		directDamageIcon.scaleY = 3;
		directDamageIcon.tintTopLeft = 2039583;
		directDamageIcon.tintBottomRight = 2039583;

		// shadowFx_2
		directDamageIcon.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// directDamageText
		const directDamageText = this.add.text(2256, 192, "", {});
		directDamageText.scaleX = 3;
		directDamageText.scaleY = 3;
		directDamageText.setOrigin(0.5, 0.5);
		directDamageText.text = "- 1";
		directDamageText.setStyle({ "align": "center", "color": "#ae6262ff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 8, "resolution": 3 });

		// lists
		const list = [];

		this.drawDeck1 = drawDeck1;
		this.drawDeck2 = drawDeck2;
		this.drawDeck_2 = drawDeck_2;
		this.energyPoolText = energyPoolText;
		this.placementsLeftText = placementsLeftText;
		this.drawDeck = drawDeck;
		this.drawDeck_1 = drawDeck_1;
		this.drawDeck_3 = drawDeck_3;
		this.drawDeck_4 = drawDeck_4;
		this.damageStampIcon = damageStampIcon;
		this.defenseFlipIcon = defenseFlipIcon;
		this.damageStampText = damageStampText;
		this.defenseFlipText = defenseFlipText;
		this.directDamageIcon = directDamageIcon;
		this.directDamageText = directDamageText;
		this.list = list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	drawDeck1;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck2;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_2;
	/** @type {Phaser.GameObjects.Text} */
	energyPoolText;
	/** @type {Phaser.GameObjects.Text} */
	placementsLeftText;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_1;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_3;
	/** @type {Phaser.GameObjects.Image} */
	drawDeck_4;
	/** @type {Phaser.GameObjects.Image} */
	damageStampIcon;
	/** @type {Phaser.GameObjects.Image} */
	defenseFlipIcon;
	/** @type {Phaser.GameObjects.Text} */
	damageStampText;
	/** @type {Phaser.GameObjects.Text} */
	defenseFlipText;
	/** @type {Phaser.GameObjects.Image} */
	directDamageIcon;
	/** @type {Phaser.GameObjects.Text} */
	directDamageText;
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

		// this.music = {
		// 	main: this.sound.add("GamePlayMusic(Loop)")
		// }

		const musicLoop = this.sound.add("GamePlayMusic(loop)");
		musicLoop.setLoop(true);
		musicLoop.setVolume(0.01);
		musicLoop.play();

		const core = new Core(this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
