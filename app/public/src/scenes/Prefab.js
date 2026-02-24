
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Prefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -32);

		// cardFront
		const cardFront = scene.add.image(0, 0, "White_silver Card Front");
		cardFront.setInteractive(new Phaser.Geom.Rectangle(0, 0, 600, 840), Phaser.Geom.Rectangle.Contains);
		cardFront.scaleX = 0.25;
		cardFront.scaleY = 0.25;
		this.add(cardFront);

		// powerText
		const powerText = scene.add.text(-32, 48, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = "-- POW";
		powerText.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(powerText);

		// DefenseText
		const defenseText = scene.add.text(32, 48, "", {});
		defenseText.setOrigin(0.5, 0.5);
		defenseText.text = "-- DEF";
		defenseText.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText);

		// energyText
		const energyText = scene.add.text(0, 64, "", {});
		energyText.setOrigin(0.5, 0.5);
		energyText.text = "-- ENG";
		energyText.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(energyText);

		// nameText
		const nameText = scene.add.text(0, -80, "", {});
		nameText.setOrigin(0.5, 0.5);
		nameText.text = "Null";
		nameText.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(nameText);

		// mainImage
		const mainImage = scene.add.image(0, -16, "Mushroom");
		mainImage.scaleX = 0.15;
		mainImage.scaleY = 0.15;
		this.add(mainImage);

		// shadowFx_10
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
