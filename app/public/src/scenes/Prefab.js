
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Prefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -32);

		// cardBack
		const cardBack = scene.add.image(0, -8, "200x280-Character-Card");
		cardBack.scaleX = 0.8;
		cardBack.scaleY = 0.8;
		this.add(cardBack);

		// shineFx
		cardBack.preFX.addShine(0.5, 0.5, 3, false);

		// title
		const title = scene.add.image(0, 80, "200x200-Wall-Title");
		title.scaleX = 0.5;
		title.scaleY = 0.5;
		this.add(title);

		// shadowFx_1
		title.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// mainImage
		const mainImage = scene.add.image(0, -16, "225x285-Wall");
		mainImage.scaleX = 0.6;
		mainImage.scaleY = 0.6;
		this.add(mainImage);

		// shadowFx
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// healthIcon
		const healthIcon = scene.add.image(72, -96, "100x100-Red-Heart");
		healthIcon.scaleX = 0.8;
		healthIcon.scaleY = 0.8;
		this.add(healthIcon);

		// healthText
		const healthText = scene.add.text(72, -96, "", {});
		healthText.setOrigin(0.5, 0.5);
		healthText.text = "-";
		healthText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(healthText);

		// defenseIcon0
		const defenseIcon0 = scene.add.image(80, -48, "100x100-Grey-Shield");
		defenseIcon0.scaleX = 0.8;
		defenseIcon0.scaleY = 0.8;
		this.add(defenseIcon0);

		// defenseText0
		const defenseText0 = scene.add.text(80, -48, "", {});
		defenseText0.setOrigin(0.5, 0.5);
		defenseText0.text = "--";
		defenseText0.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText0);

		// defenseIcon1
		const defenseIcon1 = scene.add.image(96, 0, "100x100-Grey-Shield");
		defenseIcon1.scaleX = 0.8;
		defenseIcon1.scaleY = 0.8;
		this.add(defenseIcon1);

		// defenseText1
		const defenseText1 = scene.add.text(96, 0, "", {});
		defenseText1.setOrigin(0.5, 0.5);
		defenseText1.text = "--";
		defenseText1.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText1);

		// defenseIcon2
		const defenseIcon2 = scene.add.image(112, 48, "100x100-Grey-Shield");
		defenseIcon2.scaleX = 0.8;
		defenseIcon2.scaleY = 0.8;
		this.add(defenseIcon2);

		// defenseText2
		const defenseText2 = scene.add.text(112, 48, "", {});
		defenseText2.setOrigin(0.5, 0.5);
		defenseText2.text = "--";
		defenseText2.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText2);

		// PowerIcon
		const powerIcon = scene.add.image(-64, -104, "100x100-Power");
		powerIcon.scaleX = 0.8;
		powerIcon.scaleY = 0.8;
		this.add(powerIcon);

		// powerText
		const powerText = scene.add.text(-64, -104, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = "0";
		powerText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(powerText);

		// lists
		const defenseSlots = [defenseIcon0, defenseIcon1, defenseIcon2];
		const defenseText = [defenseText0, defenseText1, defenseText2];

		this.healthText = healthText;
		this.powerText = powerText;
		this.defenseSlots = defenseSlots;
		this.defenseText = defenseText;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	healthText;
	/** @type {Phaser.GameObjects.Text} */
	powerText;
	/** @type {Phaser.GameObjects.Image[]} */
	defenseSlots;
	/** @type {Phaser.GameObjects.Text[]} */
	defenseText;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
