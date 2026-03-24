
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { socket } from "../modules/socket.js"
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// main_Menu_Background_1
		const main_Menu_Background_1 = this.add.image(640, 360, "Main-Menu-Background");
		main_Menu_Background_1.scaleX = 0.67;
		main_Menu_Background_1.scaleY = 0.67;

		// joinLobbyCard
		const joinLobbyCard = this.add.image(855, 470, "200x280-Join-Card");
		joinLobbyCard.setInteractive(this.input.makePixelPerfect());
		joinLobbyCard.scaleX = 1.2;
		joinLobbyCard.scaleY = 1.2;
		joinLobbyCard.angle = 8;

		// createLobbyCard
		const createLobbyCard = this.add.image(425, 470, "200x280-Create-Lobby-Card");
		createLobbyCard.setInteractive(this.input.makePixelPerfect());
		createLobbyCard.scaleX = 1.2;
		createLobbyCard.scaleY = 1.2;
		createLobbyCard.angle = -8;

		// amalgamations_Title
		const amalgamations_Title = this.add.image(640, 190, "Amalgamations-Title");
		amalgamations_Title.scaleX = 0.5;
		amalgamations_Title.scaleY = 0.5;

		this.joinLobbyCard = joinLobbyCard;
		this.createLobbyCard = createLobbyCard;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	joinLobbyCard;
	/** @type {Phaser.GameObjects.Image} */
	createLobbyCard;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.createLobbyCard.on("pointerdown", () => {
        	// Request to create lobby

        	socket.emit("lobby:create");
		});

		this.joinLobbyCard.on("pointerdown", () => {
        	this.scene.start("Join");
		});

		/* -------------------------------------------------------------------------- */
		/* Socket event
		/* -------------------------------------------------------------------------- */

		socket.on("lobby:created", (lobbyInfo)=>{
			/*
				// NOTE: on the client, needs to start "Lobby scene" with these params {hostId, players, currentLobbyId}
			*/
			this.scene.start("Lobby", lobbyInfo);
    	});

		this.events.once("shutdown", () => {
			socket.off("lobby:created");
    	});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
