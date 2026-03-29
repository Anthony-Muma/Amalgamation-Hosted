
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { socket } from "../modules/socket.js"
/* END-USER-IMPORTS */

export default class NetworkUI extends Phaser.Scene {

	constructor() {
		super("NetworkUI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 1280, 720);
		rectangle.setOrigin(0, 0);
		rectangle.visible = false;
		rectangle.alpha = 0.99;
		rectangle.isFilled = true;
		rectangle.fillColor = 0;
		rectangle.fillAlpha = 10;

		// network_indicator
		const network_indicator = this.add.ellipse(48, 48, 32, 32);
		network_indicator.isFilled = true;

		// icon
		const icon = this.add.image(48, 48, "100x100-Red-Circle");
		icon.scaleX = 0.8;
		icon.scaleY = 0.8;

		// shadowFx
		icon.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// _100x100_Gear
		const _100x100_Gear = this.add.image(1232, 48, "100x100-Gear");
		_100x100_Gear.scaleX = 0.8;
		_100x100_Gear.scaleY = 0.8;

		// shadowFx_1
		_100x100_Gear.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// popUp
		const popUp = this.add.image(640, 360, "960x540-Pop-Up");
		popUp.scaleX = 1.2256989585570934;
		popUp.scaleY = 0.9505546852971284;
		popUp.visible = false;

		// popUpBg
		const popUpBg = this.add.image(624, 352, "200x200-Black-Blob");
		popUpBg.scaleX = 3.9;
		popUpBg.scaleY = 2;
		popUpBg.visible = false;
		popUpBg.alpha = 0.5;
		popUpBg.alphaTopLeft = 0.5;
		popUpBg.alphaTopRight = 0.5;
		popUpBg.alphaBottomLeft = 0.5;
		popUpBg.alphaBottomRight = 0.5;

		// errorText
		const errorText = this.add.text(640, 352, "", {});
		errorText.setOrigin(0.5, 0.5);
		errorText.visible = false;
		errorText.text = "Connection Error:\nPlease Refresh Page";
		errorText.setStyle({ "align": "center", "color": "#fef23eff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// enterText_1
		const enterText_1 = this.add.text(640, 432, "", {});
		enterText_1.setOrigin(0.5, 0.5);
		enterText_1.visible = false;
		enterText_1.text = "- Anthony (MRU)\n- Ashrang (AUArts)\n- Dylan (MRU)\n- Kyle (MRU)\n- Tarun (MRU)\n- Vladimir (MRU)\n\n";
		enterText_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "22px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });
		enterText_1.setLineSpacing(8);

		this.rectangle = rectangle;
		this.network_indicator = network_indicator;
		this.icon = icon;
		this.popUp = popUp;
		this.popUpBg = popUpBg;
		this.errorText = errorText;
		this.enterText_1 = enterText_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Ellipse} */
	network_indicator;
	/** @type {Phaser.GameObjects.Image} */
	icon;
	/** @type {Phaser.GameObjects.Image} */
	popUp;
	/** @type {Phaser.GameObjects.Image} */
	popUpBg;
	/** @type {Phaser.GameObjects.Text} */
	errorText;
	/** @type {Phaser.GameObjects.Text} */
	enterText_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		console.log("NetworkUI Enable")

		const setConnected = (condition) => {
			this.network_indicator.setFillStyle(condition ? 0x00FF00 : 0xFF0000)
			if (condition) {
				this.icon.setTexture('100x100-Green-Circle') 
			} else {
				this.icon.setTexture('100x100-Red-Circle') 
			}
		}

		setConnected(socket.connected);
		socket.on("connect", ()=>{setConnected(true)});
		socket.on("disconnect", ()=>{
			this.rectangle.setVisible(true);
			this.popUp.setVisible(true);
			this.popUpBg.setVisible(true);
			this.errorText.setVisible(true);
			setConnected(false)
		});

		this.scene.bringToTop();

		this.events.once("shutdown", () => {
			socket.off("connect");
			socket.off("disconnect");
			console.log("NetworkUI Closed")
    	});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
