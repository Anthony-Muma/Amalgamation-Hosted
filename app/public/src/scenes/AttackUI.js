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
		const dividerMiddle = this.add.rectangle(600, 280, 128, 128);
		dividerMiddle.scaleX = 0.1;
		dividerMiddle.scaleY = 2.4;
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
		energySpend.visible = false;
		energySpend.isFilled = true;
		energySpend.fillColor = 4605883;

		// energySumBox
		const energySumBox = this.add.rectangle(800, 415, 128, 128);
		energySumBox.scaleX = 2;
		energySumBox.scaleY = 0.5;
		energySumBox.fillColor = 4605883;

		// energyTest
		const energyTest = this.add.text(705, 145, "", {});
		energyTest.text = "XX ENG";
		energyTest.setStyle({ "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// energySum
		const energySum = this.add.text(705, 385, "", {});
		energySum.text = "0 ENG";
		energySum.setStyle({ "align": "center", "color": "#28ee53ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// powerBox4
		const powerBox4 = this.add.rectangle(370, 440, 128, 128);
		powerBox4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox4.scaleX = 2.3;
		powerBox4.scaleY = 0.45;
		powerBox4.visible = false;
		powerBox4.isFilled = true;
		powerBox4.fillColor = 4605883;

		// powerBox3
		const powerBox3 = this.add.rectangle(370, 370, 128, 128);
		powerBox3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox3.scaleX = 2.3;
		powerBox3.scaleY = 0.45;
		powerBox3.visible = false;
		powerBox3.isFilled = true;
		powerBox3.fillColor = 4605883;

		// powerBox2
		const powerBox2 = this.add.rectangle(370, 300, 128, 128);
		powerBox2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox2.scaleX = 2.3;
		powerBox2.scaleY = 0.45;
		powerBox2.visible = false;
		powerBox2.isFilled = true;
		powerBox2.fillColor = 4605883;

		// powerBox1
		const powerBox1 = this.add.rectangle(370, 230, 128, 128);
		powerBox1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox1.scaleX = 2.3;
		powerBox1.scaleY = 0.45;
		powerBox1.visible = false;
		powerBox1.isFilled = true;
		powerBox1.fillColor = 4605883;

		// powerBox0
		const powerBox0 = this.add.rectangle(370, 160, 128, 128);
		powerBox0.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		powerBox0.scaleX = 2.3;
		powerBox0.scaleY = 0.45;
		powerBox0.visible = false;
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

		// power
		const power = this.add.text(705, 240, "", {});
		power.text = "0 POW";
		power.setStyle({ "align": "right", "color": "#ee4940ff", "fontFamily": "Eczar-Bold", "fontSize": "50px", "stroke": "#ffffffff", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.blur": 1, "shadow.stroke": true, "shadow.fill": true });

		// unselected0
		const unselected0 = this.add.image(255, 160, "200x200-Unselected");
		unselected0.scaleX = 0.3;
		unselected0.scaleY = 0.3;
		unselected0.visible = false;

		// unselected1
		const unselected1 = this.add.image(255, 230, "200x200-Unselected");
		unselected1.scaleX = 0.3;
		unselected1.scaleY = 0.3;
		unselected1.visible = false;

		// unselected2
		const unselected2 = this.add.image(255, 300, "200x200-Unselected");
		unselected2.scaleX = 0.3;
		unselected2.scaleY = 0.3;
		unselected2.visible = false;

		// unselected3
		const unselected3 = this.add.image(255, 370, "200x200-Unselected");
		unselected3.scaleX = 0.3;
		unselected3.scaleY = 0.3;
		unselected3.visible = false;

		// unselected4
		const unselected4 = this.add.image(255, 440, "200x200-Unselected");
		unselected4.scaleX = 0.3;
		unselected4.scaleY = 0.3;
		unselected4.visible = false;

		// selected
		const selected = this.add.image(-48, 160, "200x200-Selected");
		selected.scaleX = 0.3;
		selected.scaleY = 0.3;

		this.exitButton = exitButton;
		this.attackButton = attackButton;
		this.energyTotal = energyTotal;
		this.energyTest = energyTest;
		this.energySum = energySum;
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
		this.power = power;
		this.unselected0 = unselected0;
		this.unselected1 = unselected1;
		this.unselected2 = unselected2;
		this.unselected3 = unselected3;
		this.unselected4 = unselected4;
		this.selected = selected;

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
	/** @type {Phaser.GameObjects.Text} */
	energySum;
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
	/** @type {Phaser.GameObjects.Text} */
	power;
	/** @type {Phaser.GameObjects.Image} */
	unselected0;
	/** @type {Phaser.GameObjects.Image} */
	unselected1;
	/** @type {Phaser.GameObjects.Image} */
	unselected2;
	/** @type {Phaser.GameObjects.Image} */
	unselected3;
	/** @type {Phaser.GameObjects.Image} */
	unselected4;
	/** @type {Phaser.GameObjects.Image} */
	selected;

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

		this.powerBoxes = [
			this.powerBox0, 
			this.powerBox1, 
			this.powerBox2, 
			this.powerBox3, 
			this.powerBox4
		];

		this.unselectedIcons = [
			this.unselected0, 
			this.unselected1, 
			this.unselected2, 
			this.unselected3, 
			this.unselected4
		];

		this.powerTexts = [
			this.power0, 
			this.power1, 
			this.power2, 
			this.power3, 
			this.power4
		];

		this.selected.setVisible(false);
		this.selectedIndices = [];

		// Make everything interactive
		this.unselectedIcons.forEach(icon => icon.setInteractive());
		this.powerTexts.forEach(text => text.setInteractive());


		//Method kept until the ui is finished in case of debugging
		this.input.keyboard.on('keydown-Q', () => {
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});

		// Makes the exit button exit the scene
		this.exitButton.on("pointerdown", () => {
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});

		// Sets the total to the current value as soon as the scene is loaded
		if (this.gameInfo?.energyPool !== undefined) {
			this.energyTest.setText(`${this.gameInfo.energyPool} ENG`);
		}

		// Set the powers in the scene for each one available
		const list = this.amalgamationInfo?.powerObjectList || [];
		list.forEach((p, i) => {
			if (p?.power !== undefined) {
				this.powerTexts[i].setText(`${p.power} POW`).setVisible(true);
				this.unselectedIcons[i].setVisible(true);
			} else {
				this.powerTexts[i].setVisible(false);
				this.unselectedIcons[i].setVisible(false);
			}
		});

		// Click handler
		const handleSelection = (index) => {
			const list = this.amalgamationInfo.powerObjectList;
			if (!list[index] || list[index].power === undefined) return;

			// Toggle selection
			const pos = this.selectedIndices.indexOf(index);

			if (pos === -1) {
				this.selectedIndices.push(index);
			} else {
				this.selectedIndices.splice(pos, 1);
			}

			// Update the UI
			this.updatePowerDisplay();
			this.updateEnergySum();
		};

		// Attach click handlers
		this.powerBoxes.forEach((box, index) => box.on("pointerdown", () => handleSelection(index)));
		this.powerTexts.forEach((text, index) => text.on("pointerdown", () => handleSelection(index)));
		this.unselectedIcons.forEach((icon, index) => icon.on("pointerdown", () => handleSelection(index)));
	}

	handleSelection(index) {
		const list = this.amalgamationInfo.powerObjectList;
		if (!list[index] || list[index].power === undefined) return;

		// Toggle selection
		const existingIndex = this.selectedIndices.indexOf(index);

		if (existingIndex !== -1) {
			// Remove POW if already selected
			this.selectedIndices.splice(existingIndex, 1);

			// Show unselected icon again
			this.unselectedIcons[index].setVisible(true);
		} else {
			// Adds if not selected
			this.selectedIndices.push(index);

			// Hide unselected icon/image
			this.unselectedIcons[index].setVisible(false);
		}

		// Update total power display
		let totalPower = 0;
		for (let i = 0; i < this.selectedIndices.length; i++) {
			const idx = this.selectedIndices[i];
			totalPower += list[idx].power;
		}

		this.power.setText(`${totalPower} POW`).setVisible(true);

		// Update energy
		this.updateEnergySum();
	}

	updatePowerDisplay() {
		const list = this.amalgamationInfo.powerObjectList;

		for (let i = 0; i < 5; i++) {
			const powerText = this.powerTexts[i];
			const unselectedIcon = this.unselectedIcons[i];

			if (list[i]?.power !== undefined) {
				powerText.setText(`${list[i].power} POW`).setVisible(true);

				// Hide the unselected icons if selected
				const isSelected = this.selectedIndices.includes(i);
				if (isSelected) {
					unselectedIcon.setTexture("200x200-Selected");
				} else {
					unselectedIcon.setTexture("200x200-Unselected");
				}

				unselectedIcon.setVisible(true);

			} else {
				powerText.setVisible(false);
				unselectedIcon.setVisible(false);
			}
		}

	}	

	updateEnergySum() {
		const list = this.amalgamationInfo.powerObjectList;

		let totalEnergy;
		if (this.gameInfo && this.gameInfo.energyPool !== undefined) {
			totalEnergy = this.gameInfo.energyPool;
		} else {
			totalEnergy = 0;
		}

		// Sum of all the selected POW
		let totalSelectedPower = 0;

		this.selectedIndices.forEach(i => {
			if (list[i] && list[i].power !== undefined) {
				totalSelectedPower += list[i].power;
			}
		});

		const remaining = totalEnergy - totalSelectedPower;

		// Update the energy text
		if (remaining >= 0) {
			this.energySum.setText(`${remaining} ENG`);
		} else {
			this.energySum.setText(`Not Enough`);
		}

		// Updates the total power 
		this.power.setText(`${totalSelectedPower} POW`);
	}

	updateSelectedPowerDisplay() {
		let totalPower = 0;

		this.selectedIndices.forEach(i => {
			const obj = this.amalgamationInfo.powerObjectList[i];
			if (obj && obj.power !== undefined) {
				totalPower += obj.power;
			}
		});

		if (totalPower > 0) {
			this.power.setText(`${totalPower} POW`).setVisible(true);
		} else {
			this.power.setText(`0 POW`).setVisible(true);
		}
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
