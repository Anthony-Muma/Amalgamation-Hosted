
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

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 1280, 720);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.alpha = 0.99;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 10;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(620, 330, 128, 128);
		rectangle_2.scaleX = 6;
		rectangle_2.scaleY = 3;
		rectangle_2.isFilled = true;

		// _200x200_ExitButton
		const _200x200_ExitButton = this.add.image(992, 144, "200x200-ExitButton");
		_200x200_ExitButton.scaleX = 0.5;
		_200x200_ExitButton.scaleY = 0.5;

		this.events.emit("scene-awake");
	}

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

		this.input.keyboard.on('keydown-Q', ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});

       //...

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
