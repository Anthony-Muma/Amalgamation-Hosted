
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AttackUI extends Phaser.Scene {

	constructor() {
		super("AttackUI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 1280, 720);
		rectangle.setOrigin(0, 0);
		rectangle.alpha = 0.99;
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 10;

		// attackUi
		const attackUi = this.add.rectangle(600, 335, 128, 128);
		attackUi.scaleX = 6.5;
		attackUi.scaleY = 3.5;
		attackUi.isFilled = true;

		// exitButton
		const exitButton = this.add.image(1015, 112, "200x200-ExitButton");
		exitButton.scaleX = 0.5;
		exitButton.scaleY = 0.5;

		// attackButton
		const attackButton = this.add.image(600, 555, "500x200-Bar");

		// _500x200_Attack
		const _500x200_Attack = this.add.image(600, 555, "500x200-Attack");
		_500x200_Attack.scaleX = 0.7;
		_500x200_Attack.scaleY = 0.7;

		// dividerMiddle
		const dividerMiddle = this.add.rectangle(600, 271, 128, 128);
		dividerMiddle.scaleX = 0.1;
		dividerMiddle.scaleY = 2.5;
		dividerMiddle.isFilled = true;
		dividerMiddle.fillColor = 0;

		// equal
		const equal = this.add.rectangle(810, 350, 128, 128);
		equal.scaleX = 2.5;
		equal.scaleY = 0.1;
		equal.isFilled = true;
		equal.fillColor = 0;

		// energyTotal
		const energyTotal = this.add.rectangle(800, 175, 128, 128);
		energyTotal.scaleX = 2;
		energyTotal.scaleY = 0.5;
		energyTotal.fillColor = 4605883;

		// energySpend
		const energySpend = this.add.rectangle(800, 270, 128, 128);
		energySpend.scaleX = 2;
		energySpend.scaleY = 0.5;
		energySpend.isFilled = true;
		energySpend.fillColor = 4605883;

		// energySum
		const energySum = this.add.rectangle(800, 415, 128, 128);
		energySum.scaleX = 2;
		energySum.scaleY = 0.5;
		energySum.fillColor = 4605883;

		// energyTest
		const energyTest = this.add.text(705, 145, "", {});
		energyTest.text = "XX ENG";
		energyTest.setStyle({ "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// energyTest_1
		const energyTest_1 = this.add.text(705, 385, "", {});
		energyTest_1.text = "XX ENG";
		energyTest_1.setStyle({ "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		this.exitButton = exitButton;
		this.attackButton = attackButton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	exitButton;
	/** @type {Phaser.GameObjects.Image} */
	attackButton;

	/* START-USER-CODE */

	// Write your code here

	/**
	 * 
	 * @param {{
	 * 		energyPool : number,
	 * 		attackSuccessCb : (attackIndices : number[]) => undefined
	 * }} gameInfo 
	 * @param {{
	 * 		health : number,
	 * 		powerObjectList : { energy : number, power : number }[],
	 * 		defenseObjectList : { defense : number }[]
	 * }			
	 * } amalgamationInfo 
	 */
	init({gameInfo, amalgamationInfo}) {
		this.gameInfo = gameInfo;
		this.amalgamationInfo = amalgamationInfo;
		console.log(amalgamationInfo)
	}

	create() {

		this.editorCreate();

		//method kept until the ui is finished in case of debugging
		this.input.keyboard.on('keydown-Q', ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});

		this.exitButton.on("pointerdown", ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});



       //...

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
