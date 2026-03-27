
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

		// amalgamations_Title
		const amalgamations_Title = this.add.image(640, 190, "Amalgamations-Title");
		amalgamations_Title.scaleX = 0.5;
		amalgamations_Title.scaleY = 0.5;

		// createLobbyCard
		const createLobbyCard = this.add.image(425, 470, "240x336-Create-Lobby-Card");
		createLobbyCard.setInteractive(this.input.makePixelPerfect());
		createLobbyCard.angle = -8;

		// joinLobbyCard
		const joinLobbyCard = this.add.image(855, 470, "240x336-Join-Lobby-Card");
		joinLobbyCard.setInteractive(this.input.makePixelPerfect());
		joinLobbyCard.angle = 8;

		this.amalgamations_Title = amalgamations_Title;
		this.createLobbyCard = createLobbyCard;
		this.joinLobbyCard = joinLobbyCard;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	amalgamations_Title;
	/** @type {Phaser.GameObjects.Image} */
	createLobbyCard;
	/** @type {Phaser.GameObjects.Image} */
	joinLobbyCard;

	/* START-USER-CODE */

	// Write your code here

	init() {
		this.cameras.main.fadeIn(200, 0, 0, 0);
	}

	create() {

		this.editorCreate();

		this.createLobbyCard.on("pointerdown", () => {
        	// Request to create lobby

        	socket.emit("lobby:create");
		});

		this.joinLobbyCard.on("pointerdown", () => {
        	this.scene.start("Join");
		});

		// Title Rock

		this.tweens.add({
			targets: this.amalgamations_Title,
			angle: -2,
			duration: 1000,
			ease: "Sine.easeInOut",
			onComplete: ()=> {
				this.tweens.add({
					targets: this.amalgamations_Title,
					angle: 2,
					duration: 1000,
					yoyo: true,
					repeat: -1,
					ease: "Sine.easeInOut"
				});
			}
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
