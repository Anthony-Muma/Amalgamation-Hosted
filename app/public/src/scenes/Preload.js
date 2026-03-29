
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// guapen
		const guapen = this.add.image(505.0120544433594, 360, "guapen");
		guapen.scaleX = 0.32715486817515643;
		guapen.scaleY = 0.32715486817515643;
		guapen.visible = false;

		// progressBar
		const progressBar = this.add.rectangle(553, 361, 256, 20);
		progressBar.setOrigin(0, 0);
		progressBar.visible = false;
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// progressBarBg
		const progressBarBg = this.add.rectangle(553.0120849609375, 361, 256, 20);
		progressBarBg.setOrigin(0, 0);
		progressBarBg.visible = false;
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(552.0120849609375, 329, "", {});
		loadingText.visible = false;
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });

		// amaBg
		const amaBg = this.add.image(640, 360, "320x180-Amalgamations-Title");
		amaBg.tintFill = true;
		amaBg.tintTopLeft = 0;
		amaBg.tintTopRight = 0;
		amaBg.tintBottomLeft = 0;
		amaBg.tintBottomRight = 0;

		// amaMain
		const amaMain = this.add.image(640, 360, "320x180-Amalgamations-Title");

		// wipeFx
		const wipeFx = amaMain.preFX.addWipe(0.2, 0, 0);
		wipeFx.progress = 1;
		wipeFx.reveal = true;

		this.progressBar = progressBar;
		this.amaBg = amaBg;
		this.wipeFx = wipeFx;
		this.amaMain = amaMain;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;
	/** @type {Phaser.GameObjects.Image} */
	amaBg;
	/** @type {Phaser.FX.Wipe} */
	wipeFx;
	/** @type {Phaser.GameObjects.Image} */
	amaMain;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		const width =  this.progressBar.width;

		this.load.on("progress", (progress) => {

			//this.progressBar.width = progress * width;
			this.wipeFx.progress =  progress
		});
	}

	create() {
		this.amaBg.setVisible(false);

		this.tweens.add({
			targets: this.amaMain,
			x: 640,
			y: 190,
			scaleX: 3,
			scaleY: 3,
			duration: 300,
        	ease: "Sine.easeInOut",
            onComplete: () => {
				
				this.scene.launch("NetworkUI");
				// this.scene.start("MainMenu");
				
				this.scene.transition({
					target: 'MainMenu',
					duration: 100,
					moveBelow: true,       
					onUpdate: (progress) => {
						this.cameras.main.setAlpha(1 - progress); 
					}
				});
			}
		});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
