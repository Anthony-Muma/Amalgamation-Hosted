
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { socket } from "../modules/socket.js"
/* END-USER-IMPORTS */

export default class Lobby extends Phaser.Scene {

	constructor() {
		super("Lobby");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// main_Menu_Background
		const main_Menu_Background = this.add.image(640, 360, "Main-Menu-Background");
		main_Menu_Background.scaleX = 0.67;
		main_Menu_Background.scaleY = 0.67;

		// lobbyTitle
		const lobbyTitle = this.add.text(671, 94, "", {});
		lobbyTitle.setOrigin(0.5, 0.5);
		lobbyTitle.text = "Lobby";
		lobbyTitle.setStyle({ "color": "#ffffffff", "fontSize": "48px", "stroke": "#000000ff", "strokeThickness": 4 });

		// playerListBackground
		const playerListBackground = this.add.rectangle(311, 343, 450, 350);
		playerListBackground.isFilled = true;
		playerListBackground.fillColor = 2236962;

		// text_1
		const text_1 = this.add.text(310, 204, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Players";
		text_1.setStyle({ "align": "center", "color": "#ffffffff", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 3 });

		// leaveButton
		const leaveButton = this.add.rectangle(674, 305, 180, 60);
		leaveButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 180, 60), Phaser.Geom.Rectangle.Contains);
		leaveButton.isFilled = true;
		leaveButton.fillColor = 11141120;

		// leaveText
		const leaveText = this.add.text(674, 305, "", {});
		leaveText.setOrigin(0.5, 0.5);
		leaveText.text = "Leave";
		leaveText.setStyle({ "align": "center", "fontSize": "24px" });

		// startButton
		const startButton = this.add.rectangle(674, 212, 200, 80);
		startButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains);
		startButton.isFilled = true;
		startButton.fillColor = 43520;

		// startText
		const startText = this.add.text(674, 212, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.text = "Start";
		startText.setStyle({ "align": "center", "fontSize": "32px" });

		// text_2
		const text_2 = this.add.rectangle(999, 243, 35, 15);
		text_2.scaleX = 10;
		text_2.scaleY = 10;
		text_2.isFilled = true;
		text_2.fillColor = 5197647;

		// text
		const text = this.add.text(999, 218, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Lobby Code\n";
		text.setStyle({ "align": "center", "color": "#ffffffff", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 3 });

		// copyButton
		const copyButton = this.add.rectangle(1001, 393, 250, 80);
		copyButton.isFilled = true;
		copyButton.fillColor = 5151693;

		// copyText
		const copyText = this.add.text(892, 367, "", {});
		copyText.text = "Copy Code to \nClipboard";
		copyText.setStyle({ "align": "center", "fontSize": "28px" });

		this.lobbyTitle = lobbyTitle;
		this.playerListBackground = playerListBackground;
		this.text_1 = text_1;
		this.leaveButton = leaveButton;
		this.leaveText = leaveText;
		this.startButton = startButton;
		this.startText = startText;
		this.text_2 = text_2;
		this.text = text;
		this.copyButton = copyButton;
		this.copyText = copyText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	lobbyTitle;
	/** @type {Phaser.GameObjects.Rectangle} */
	playerListBackground;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	leaveButton;
	/** @type {Phaser.GameObjects.Text} */
	leaveText;
	/** @type {Phaser.GameObjects.Rectangle} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;
	/** @type {Phaser.GameObjects.Rectangle} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Rectangle} */
	copyButton;
	/** @type {Phaser.GameObjects.Text} */
	copyText;

	/* START-USER-CODE */

	// Write your code here

	/**
	 * 
	 * @param {{hostId, players, currentLobbyId}} lobbyInfo 
	 */
	init(lobbyInfo) {
		this.players = lobbyInfo.players;
		this.currentLobbyId = lobbyInfo.currentLobbyId
		console.log(lobbyInfo.currentLobbyId);
	}

	create() {

		this.editorCreate();

		// Placeholder player list
        // const players = ["Player1", "You", "Player2", "Player3"];
		this.playerNameGroup = this.add.group();
		this.updatePlayerList(this.players);

        this.startButton.on("pointerdown", () => {
            console.log("Start Game"); // Placeholder
			this.scene.start("Level");
        });

        this.leaveButton.on("pointerdown", () => {
			socket.emit("lobby:leave", this.currentLobbyId);
            this.scene.start("MainMenu");
        });


		this.copyButton.on("pointerdown", () => {
			navigator.clipboard.writeText(this.currentLobbyId)
				.then(() => {
					console.log("Lobby code copied!");
					this.copyButton.setFillStyle(0x1F1DE0);
					this.time.delayedCall(500, () => {
						this.copyButton.setFillStyle(5151693);
					});
				})
				.catch(err => {
					console.error("Failed to copy:", err);
				});
		});

		/* -------------------------------------------------------------------------- */
		/* On Lobby events
		/* -------------------------------------------------------------------------- */

		socket.on("lobby:updated", (lobbyInfo)=>{
			// No need to swap scenes
			console.log(lobbyInfo);
			this.updatePlayerList(lobbyInfo.players);
    	});

		socket.on("lobby:kicked", (data)=>{
			/*
				// NOTE: on the client, needs to start "Main menu" with these params {reasonMessage}
				// NOTE: on normal leave (Not socket driven), start "Main menu" {reasonMessage : "left lobby"} *** add somewhere
			*/

			// Mimic scene swap
			alert(data.reasonMessage);
			this.scene.start("MainMenu");
   	 	});

		/* -------------------------------------------------------------------------- */
		/* Shutdown clean up
		/* -------------------------------------------------------------------------- */

		this.events.once("shutdown", () => {
			socket.off("lobby:updated");
			socket.off("lobby:kicked");
    	});

		// Lobby code

		if (this.currentLobbyId) {
			this.text.setText("Lobby Code\n" + this.currentLobbyId);
		}


	}

	updatePlayerList(players) {
		this.playerNameGroup.clear(true, true);
		players.forEach((player, index) => {
            const text = this.add.text(125, 250 + index * 50, player, {
                fontSize: "28px",
                color: "#ffffff"
            }).setOrigin(0,0.5);
			this.playerNameGroup.add(text);
        });
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
