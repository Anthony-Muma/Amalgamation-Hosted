
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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
		const card_back = this.add.image(1488, 592, "Card back");
		card_back.scaleX = 0.25;
		card_back.scaleY = 0.25;

		// card_back_2
		const card_back_2 = this.add.image(832, 384, "Card back");
		card_back_2.scaleX = 0.33;
		card_back_2.scaleY = 0.33;
		card_back_2.tintTopLeft = 3459137;
		card_back_2.tintTopRight = 6286863;
		card_back_2.tintBottomLeft = 1873212;
		card_back_2.tintBottomRight = 943150;

		// card_back_8
		const card_back_8 = this.add.image(128, 192, "Card back");
		card_back_8.scaleX = 0.33;
		card_back_8.scaleY = 0.33;
		card_back_8.angle = -180;
		card_back_8.tintTopLeft = 13120564;
		card_back_8.tintTopRight = 995054;
		card_back_8.tintBottomLeft = 1973397;
		card_back_8.tintBottomRight = 6557198;

		// card_back_3
		const card_back_3 = this.add.image(368, 160, "Card back");
		card_back_3.scaleX = 0.33;
		card_back_3.scaleY = 0.33;
		card_back_3.angle = -180;
		card_back_3.tintTopLeft = 13120564;
		card_back_3.tintTopRight = 995054;
		card_back_3.tintBottomLeft = 1973397;
		card_back_3.tintBottomRight = 6557198;

		// card_back_4
		const card_back_4 = this.add.image(608, 192, "Card back");
		card_back_4.scaleX = 0.33;
		card_back_4.scaleY = 0.33;
		card_back_4.angle = -180;
		card_back_4.tintTopLeft = 13120564;
		card_back_4.tintTopRight = 995054;
		card_back_4.tintBottomLeft = 1973397;
		card_back_4.tintBottomRight = 6557198;

		// card_back_5
		const card_back_5 = this.add.image(128, 528, "Card back");
		card_back_5.scaleX = 0.33;
		card_back_5.scaleY = 0.33;
		card_back_5.tintTopLeft = 13120564;
		card_back_5.tintTopRight = 995054;
		card_back_5.tintBottomLeft = 1973397;
		card_back_5.tintBottomRight = 6557198;

		// card_back_6
		const card_back_6 = this.add.image(368, 560, "Card back");
		card_back_6.scaleX = 0.33;
		card_back_6.scaleY = 0.33;
		card_back_6.tintTopLeft = 13120564;
		card_back_6.tintTopRight = 995054;
		card_back_6.tintBottomLeft = 1973397;
		card_back_6.tintBottomRight = 6557198;

		// card_back_7
		const card_back_7 = this.add.image(608, 528, "Card back");
		card_back_7.scaleX = 0.33;
		card_back_7.scaleY = 0.33;
		card_back_7.tintTopLeft = 13120564;
		card_back_7.tintTopRight = 995054;
		card_back_7.tintBottomLeft = 1973397;
		card_back_7.tintBottomRight = 6557198;

		// card_front_1
		const card_front_1 = this.add.image(1184, 608, "Card front");
		card_front_1.scaleX = 0.22;
		card_front_1.scaleY = 0.22;

		// card_back_1
		const card_back_1 = this.add.image(1040, 96, "Card back");
		card_back_1.scaleX = 0.22;
		card_back_1.scaleY = 0.22;

		// card_front
		const card_front = this.add.image(1184, 544, "Card front");
		card_front.scaleX = 0.22;
		card_front.scaleY = 0.22;

		// card_front_2
		const card_front_2 = this.add.image(1184, 480, "Card front");
		card_front_2.scaleX = 0.22;
		card_front_2.scaleY = 0.22;

		// card_back_9
		const card_back_9 = this.add.image(1184, 96, "Card back");
		card_back_9.scaleX = 0.22;
		card_back_9.scaleY = 0.22;

		// card_back_10
		const card_back_10 = this.add.image(-128, 352, "Card back");
		card_back_10.scaleX = 0.33;
		card_back_10.scaleY = 0.33;
		card_back_10.angle = -180;
		card_back_10.tintTopLeft = 3459137;
		card_back_10.tintTopRight = 6286863;
		card_back_10.tintBottomLeft = 1873212;
		card_back_10.tintBottomRight = 943150;

		// text_1
		const text_1 = this.add.text(960, 880, "", {});
		text_1.text = "Time: 30s";
		text_1.setStyle({ "fontSize": "64px" });

		this.energyZone = energyZone;
		this.powerZone = powerZone;
		this.defenseZone = defenseZone;
		this.allCard = allCard;

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

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

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



	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
