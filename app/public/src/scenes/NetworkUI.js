
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
		const network_indicator = this.add.ellipse(32, 32, 32, 32);
		network_indicator.isFilled = true;

		this.network_indicator = network_indicator;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	network_indicator;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		console.log("NetworkUI Enable")

		const setConnected = (condition) => {
			this.network_indicator.setFillStyle(condition ? 0x00FF00 : 0xFF0000)
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
