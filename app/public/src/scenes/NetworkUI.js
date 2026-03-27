
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

		this.network_indicator = network_indicator;
		this.icon = icon;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	network_indicator;
	/** @type {Phaser.GameObjects.Image} */
	icon;

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
		socket.on("disconnect", ()=>{setConnected(false)});

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
