
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { socket } from "../modules/socket.js"
import { generateName } from "../modules/nameGenerator.js";
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
		const main_Menu_Background = this.add.image(640, 360, "Purple-Background");
		main_Menu_Background.scaleX = 0.67;
		main_Menu_Background.scaleY = 0.67;

		// lobbyTitle
		const lobbyTitle = this.add.text(640, 96, "", {});
		lobbyTitle.setOrigin(0.5, 0.5);
		lobbyTitle.text = "Lobby";
		lobbyTitle.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "48px", "stroke": "#000000ff", "strokeThickness": 16 });

		// text_1
		const text_1 = this.add.text(320, 224, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Players";
		text_1.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 16 });

		// leaveButton
		const leaveButton = this.add.rectangle(112, 672, 180, 60);
		leaveButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 180, 60), Phaser.Geom.Rectangle.Contains);
		leaveButton.isFilled = true;
		leaveButton.fillColor = 11141120;

		// leaveText
		const leaveText = this.add.text(112, 672, "", {});
		leaveText.setOrigin(0.5, 0.5);
		leaveText.text = "Leave";
		leaveText.setStyle({ "align": "center", "fontSize": "24px" });

		// startButton
		const startButton = this.add.rectangle(1152, 656, 200, 80);
		startButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains);
		startButton.isFilled = true;
		startButton.fillColor = 43520;

		// startText
		const startText = this.add.text(1152, 656, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.text = "Start";
		startText.setStyle({ "align": "center", "fontSize": "32px" });

		// text
		const text = this.add.text(992, 224, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Lobby Code";
		text.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 16 });

		// copyButton
		const copyButton = this.add.rectangle(992, 448, 270, 80);
		copyButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 80), Phaser.Geom.Rectangle.Contains);
		copyButton.isFilled = true;
		copyButton.fillColor = 5151693;

		// copyText
		const copyText = this.add.text(992, 448, "", {});
		copyText.setOrigin(0.5, 0.5);
		copyText.text = "Copy to Clipboard";
		copyText.setStyle({ "align": "center", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 16 });

		this.lobbyTitle = lobbyTitle;
		this.text_1 = text_1;
		this.leaveButton = leaveButton;
		this.leaveText = leaveText;
		this.startButton = startButton;
		this.startText = startText;
		this.text = text;
		this.copyButton = copyButton;
		this.copyText = copyText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	lobbyTitle;
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
			socket.emit("game:start");

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

		socket.once("game:started", ()=> {
			this.scene.start("Level");
		});

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
		// player
		players.forEach((player, index) => {
            const text = this.add.text(125, 270 + index * 50, generateName(player), {
				fontFamily: "Eczar-Bold",
                fontSize: "32px",
                color: "#c2c2c2",
				stroke: "#000000",
				strokeThickness: 16,
            }).setOrigin(0,0.5);
			this.playerNameGroup.add(text);
        });
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
