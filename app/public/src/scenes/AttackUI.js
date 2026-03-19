
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
		attackUi.visible = false;
		attackUi.isFilled = true;

		// _960x540_Pop_Up
		const _960x540_Pop_Up = this.add.image(600, 335, "960x540-Pop-Up");
		_960x540_Pop_Up.scaleX = 1.2256989585570934;
		_960x540_Pop_Up.scaleY = 0.9505546852971284;

		// exitButton
		const exitButton = this.add.image(1015, 112, "200x200-ExitButton");
		exitButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 200), Phaser.Geom.Rectangle.Contains);
		exitButton.scaleX = 0.5;
		exitButton.scaleY = 0.5;

		// attackButton
		const attackButton = this.add.image(600, 545, "500x200-Bar");

		// _500x200_Attack
		const _500x200_Attack = this.add.image(600, 545, "500x200-Attack");
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

		// energySumBox
		const energySumBox = this.add.rectangle(800, 415, 128, 128);
		energySumBox.scaleX = 2;
		energySumBox.scaleY = 0.5;
		energySumBox.fillColor = 4605883;

		// energyTest
		const energyTest = this.add.text(705, 145, "", {});
		energyTest.visible = false;
		energyTest.text = "XX ENG";
		energyTest.setStyle({ "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// energySum
		const energySum = this.add.text(705, 385, "", {});
		energySum.text = "XX ENG";
		energySum.setStyle({ "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// powerBox4
		const powerBox4 = this.add.rectangle(370, 440, 128, 128);
		powerBox4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox4.scaleX = 2.3;
		powerBox4.scaleY = 0.45;
		powerBox4.isFilled = true;
		powerBox4.fillColor = 4605883;

		// powerBox3
		const powerBox3 = this.add.rectangle(370, 370, 128, 128);
		powerBox3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox3.scaleX = 2.3;
		powerBox3.scaleY = 0.45;
		powerBox3.isFilled = true;
		powerBox3.fillColor = 4605883;

		// powerBox2
		const powerBox2 = this.add.rectangle(370, 300, 128, 128);
		powerBox2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox2.scaleX = 2.3;
		powerBox2.scaleY = 0.45;
		powerBox2.isFilled = true;
		powerBox2.fillColor = 4605883;

		// powerBox1
		const powerBox1 = this.add.rectangle(370, 230, 128, 128);
		powerBox1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox1.scaleX = 2.3;
		powerBox1.scaleY = 0.45;
		powerBox1.isFilled = true;
		powerBox1.fillColor = 4605883;

		// powerBox0
		const powerBox0 = this.add.rectangle(370, 160, 128, 128);
		powerBox0.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox0.scaleX = 2.3;
		powerBox0.scaleY = 0.45;
		powerBox0.isFilled = true;
		powerBox0.fillColor = 4605883;

		// power0
		const power0 = this.add.text(300, 130, "", {});
		power0.visible = false;
		power0.text = "XX ENG";
		power0.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// power1
		const power1 = this.add.text(300, 200, "", {});
		power1.visible = false;
		power1.text = "XX POW";
		power1.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// power2
		const power2 = this.add.text(300, 270, "", {});
		power2.visible = false;
		power2.text = "XX POW";
		power2.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// power3
		const power3 = this.add.text(300, 340, "", {});
		power3.visible = false;
		power3.text = "XX POW";
		power3.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// power4
		const power4 = this.add.text(300, 410, "", {});
		power4.visible = false;
		power4.text = "XX POW";
		power4.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		this.exitButton = exitButton;
		this.attackButton = attackButton;
		this.energyTotal = energyTotal;
		this.energyTest = energyTest;
		this.powerBox4 = powerBox4;
		this.powerBox3 = powerBox3;
		this.powerBox2 = powerBox2;
		this.powerBox1 = powerBox1;
		this.powerBox0 = powerBox0;
		this.power0 = power0;
		this.power1 = power1;
		this.power2 = power2;
		this.power3 = power3;
		this.power4 = power4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	exitButton;
	/** @type {Phaser.GameObjects.Image} */
	attackButton;
	/** @type {Phaser.GameObjects.Rectangle} */
	energyTotal;
	/** @type {Phaser.GameObjects.Text} */
	energyTest;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerBox4;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerBox3;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerBox2;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerBox1;
	/** @type {Phaser.GameObjects.Rectangle} */
	powerBox0;
	/** @type {Phaser.GameObjects.Text} */
	power0;
	/** @type {Phaser.GameObjects.Text} */
	power1;
	/** @type {Phaser.GameObjects.Text} */
	power2;
	/** @type {Phaser.GameObjects.Text} */
	power3;
	/** @type {Phaser.GameObjects.Text} */
	power4;

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

		//Generate text inside energyTotal to show the current energy 
		if (this.gameInfo && this.gameInfo.energyPool !== undefined) {
			this.energyTest.setText(`${this.gameInfo.energyPool} ENG`);
			this.energyTest.setVisible(true);
		}

		//Generate text inside powerBox1 to show the power value inside powerObjectList 
		if (this.amalgamationInfo && this.amalgamationInfo.powerObjectList) {
			const list = this.amalgamationInfo.powerObjectList;
			for (let x = 0; x < list.length && x < 5; x++) {
				if (list[x] && list[x].power !== undefined) {
					this["power" + x].setText(`${list[x].power} POW`);
					this["power" + x].setVisible(true);
				}
			}
		}

       //...

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
