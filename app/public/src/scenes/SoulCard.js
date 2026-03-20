
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SoulCard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// cardFront
		const cardFront = scene.add.image(0, 0, "200x280-Power-Soul-Card");
		cardFront.scaleX = 0.8;
		cardFront.scaleY = 0.8;
		this.add(cardFront);

		// shineFx
		cardFront.preFX.addShine(0.5, 0.5, 3, false);

		// title
		const title = scene.add.image(0, 64, "200x200-Power-Soul-Title");
		title.scaleX = 0.8;
		title.scaleY = 0.8;
		this.add(title);

		// soulSymbol
		const soulSymbol = scene.add.image(0, -32, "200x200-Power-Soul");
		soulSymbol.scaleX = 0.6;
		soulSymbol.scaleY = 0.6;
		this.add(soulSymbol);

		this.cardFront = cardFront;
		this.title = title;
		this.soulSymbol = soulSymbol;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	cardFront;
	/** @type {Phaser.GameObjects.Image} */
	title;
	/** @type {Phaser.GameObjects.Image} */
	soulSymbol;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
