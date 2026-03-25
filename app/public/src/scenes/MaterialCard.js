
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MaterialCard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -152);

		// cardFront
		const cardFront = scene.add.image(0, 0, "200x280-Bright-White-Card");
		cardFront.scaleX = 0.8;
		cardFront.scaleY = 0.8;
		cardFront.tintTopLeft = 9803157;
		cardFront.tintTopRight = 9803157;
		cardFront.tintBottomLeft = 0;
		cardFront.tintBottomRight = 0;
		this.add(cardFront);

		// mainImage
		const mainImage = scene.add.image(0, -36, "200x200-Sword");
		mainImage.scaleX = 0.6;
		mainImage.scaleY = 0.6;
		this.add(mainImage);

		// shadowFx
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// title
		const title = scene.add.text(0, -88, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "PILLOW";
		title.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "18px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(title);

		// defenseSymbol
		const defenseSymbol = scene.add.image(40, 40, "100x100-Blue-Shield");
		defenseSymbol.scaleX = 0.8;
		defenseSymbol.scaleY = 0.8;
		this.add(defenseSymbol);

		// powerSymbol
		const powerSymbol = scene.add.image(-40, 40, "100x100-Power");
		powerSymbol.scaleX = 0.8;
		powerSymbol.scaleY = 0.8;
		this.add(powerSymbol);

		// energySymbol
		const energySymbol = scene.add.image(0, 72, "100x100-Energy");
		energySymbol.scaleX = 0.8;
		energySymbol.scaleY = 0.8;
		this.add(energySymbol);

		// powerText
		const powerText = scene.add.text(-40, 40, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = "10";
		powerText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(powerText);

		// defenseText
		const defenseText = scene.add.text(40, 40, "", {});
		defenseText.setOrigin(0.5, 0.5);
		defenseText.text = "10";
		defenseText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(defenseText);

		// energyText
		const energyText = scene.add.text(0, 72, "", {});
		energyText.setOrigin(0.5, 0.5);
		energyText.text = "10";
		energyText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(energyText);

		// orText_1
		const orText_1 = scene.add.text(176, 48, "", {});
		orText_1.setOrigin(0.5, 0.5);
		orText_1.text = "OR";
		orText_1.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "18px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(orText_1);

		this.cardFront = cardFront;
		this.mainImage = mainImage;
		this.title = title;
		this.defenseSymbol = defenseSymbol;
		this.powerSymbol = powerSymbol;
		this.powerText = powerText;
		this.defenseText = defenseText;
		this.energyText = energyText;
		this.orText_1 = orText_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	cardFront;
	/** @type {Phaser.GameObjects.Image} */
	mainImage;
	/** @type {Phaser.GameObjects.Text} */
	title;
	/** @type {Phaser.GameObjects.Image} */
	defenseSymbol;
	/** @type {Phaser.GameObjects.Image} */
	powerSymbol;
	/** @type {Phaser.GameObjects.Text} */
	powerText;
	/** @type {Phaser.GameObjects.Text} */
	defenseText;
	/** @type {Phaser.GameObjects.Text} */
	energyText;
	/** @type {Phaser.GameObjects.Text} */
	orText_1;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
