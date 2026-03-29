
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

		// _200x200_Black_Blob
		const _200x200_Black_Blob = this.add.image(432, 336, "200x200-Black-Blob");
		_200x200_Black_Blob.scaleX = 3.5;
		_200x200_Black_Blob.scaleY = 2.2;
		_200x200_Black_Blob.alpha = 0.5;
		_200x200_Black_Blob.alphaTopLeft = 0.5;
		_200x200_Black_Blob.alphaTopRight = 0.5;
		_200x200_Black_Blob.alphaBottomLeft = 0.5;
		_200x200_Black_Blob.alphaBottomRight = 0.5;

		// _200x200_Black_Blob_1
		const _200x200_Black_Blob_1 = this.add.image(976, 336, "200x200-Black-Blob");
		_200x200_Black_Blob_1.scaleX = 2;
		_200x200_Black_Blob_1.scaleY = 2.2;
		_200x200_Black_Blob_1.alpha = 0.5;
		_200x200_Black_Blob_1.alphaTopLeft = 0.5;
		_200x200_Black_Blob_1.alphaTopRight = 0.5;
		_200x200_Black_Blob_1.alphaBottomLeft = 0.5;
		_200x200_Black_Blob_1.alphaBottomRight = 0.5;

		// text_1
		const text_1 = this.add.text(320, 192, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Players";
		text_1.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth": 262, "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true });

		// leaveButton1
		const leaveButton1 = this.add.rectangle(-160, 704, 180, 60);
		leaveButton1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 180, 60), Phaser.Geom.Rectangle.Contains);
		leaveButton1.isFilled = true;
		leaveButton1.fillColor = 11141120;

		// startButton1
		const startButton1 = this.add.rectangle(1136, 816, 200, 80);
		startButton1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains);
		startButton1.isFilled = true;
		startButton1.fillColor = 43520;

		// startText1
		const startText1 = this.add.text(800, 912, "", {});
		startText1.setOrigin(0.5, 0.5);
		startText1.text = "Start";
		startText1.setStyle({ "align": "center", "fontSize": "32px" });

		// copyButton
		const copyButton = this.add.rectangle(976, 448, 270, 80);
		copyButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 80), Phaser.Geom.Rectangle.Contains);
		copyButton.isFilled = true;
		copyButton.fillColor = 5151693;

		// leaveButton
		const leaveButton = this.add.image(192, 656, "500x200-Bar");
		leaveButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 480, 150), Phaser.Geom.Rectangle.Contains);
		leaveButton.scaleX = 0.75;
		leaveButton.scaleY = 0.75;

		// shadowFx
		leaveButton.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// _500x200_Attack
		this.add.image(-480, 192, "500x200-Attack");

		// _100x100_Crown
		const _100x100_Crown = this.add.image(160, 288, "100x100-Crown");
		_100x100_Crown.scaleX = 0.5;
		_100x100_Crown.scaleY = 0.5;
		_100x100_Crown.tintTopRight = 14024704;

		// shadowFx_3
		_100x100_Crown.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// shineFx
		const shineFx = _100x100_Crown.preFX.addShine(0.5, 0.5, 3, false);

		// text_2
		const text_2 = this.add.text(976, 192, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Code";
		text_2.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true });

		// player1Name
		const player1Name = this.add.text(208, 288, "", {});
		player1Name.setOrigin(0, 0.5);
		player1Name.text = "Player 1 name foo";
		player1Name.setStyle({ "color": "#fef23eff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// playerSlot
		const playerSlot = this.add.image(160, 352, "100x100-Empty");
		playerSlot.scaleX = 0.5;
		playerSlot.scaleY = 0.5;

		// shadowFx_2
		playerSlot.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// shineFx_1
		const shineFx_1 = playerSlot.preFX.addShine(0.5, 0.5, 3, false);

		// player2Name
		const player2Name = this.add.text(208, 352, "", {});
		player2Name.setOrigin(0, 0.5);
		player2Name.text = "Player 2 name bar";
		player2Name.setStyle({ "color": "#393333ff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// leaveText
		const leaveText = this.add.text(192, 656, "", {});
		leaveText.setOrigin(0.5, 0.5);
		leaveText.text = "Leave";
		leaveText.setStyle({ "align": "center", "color": "#f50000ff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// text_5
		const text_5 = this.add.text(640, 64, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "Lobby";
		text_5.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth": 262, "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true });

		// startButton
		const startButton = this.add.image(1088, 656, "500x200-Bar");
		startButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 480, 150), Phaser.Geom.Rectangle.Contains);
		startButton.scaleX = 0.75;
		startButton.scaleY = 0.75;

		// shadowFx_1
		startButton.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// startText
		const startText = this.add.text(1088, 656, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.text = "Start";
		startText.setStyle({ "align": "center", "color": "#1ce300ff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// text
		const text = this.add.text(976, 320, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "ABCDEF";
		text.setStyle({ "align": "center", "color": "#fef23eff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// startButton_1
		const startButton_1 = this.add.image(1776, 496, "500x200-Bar");
		startButton_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 480, 150), Phaser.Geom.Rectangle.Contains);
		startButton_1.scaleX = 0.75;
		startButton_1.scaleY = 0.75;

		// shadowFx_4
		startButton_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// copyText
		const copyText = this.add.text(976, 448, "", {});
		copyText.setOrigin(0.5, 0.5);
		copyText.text = "Copy to Clipboard";
		copyText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// lists
		const playerNames = [player1Name, player2Name];
		const playerIcons = [_100x100_Crown, playerSlot];
		const playerShines = [shineFx, shineFx_1];

		this.leaveButton1 = leaveButton1;
		this.startButton1 = startButton1;
		this.startText1 = startText1;
		this.copyButton = copyButton;
		this.leaveButton = leaveButton;
		this.leaveText = leaveText;
		this.startButton = startButton;
		this.startText = startText;
		this.text = text;
		this.startButton_1 = startButton_1;
		this.copyText = copyText;
		this.playerNames = playerNames;
		this.playerIcons = playerIcons;
		this.playerShines = playerShines;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	leaveButton1;
	/** @type {Phaser.GameObjects.Rectangle} */
	startButton1;
	/** @type {Phaser.GameObjects.Text} */
	startText1;
	/** @type {Phaser.GameObjects.Rectangle} */
	copyButton;
	/** @type {Phaser.GameObjects.Image} */
	leaveButton;
	/** @type {Phaser.GameObjects.Text} */
	leaveText;
	/** @type {Phaser.GameObjects.Image} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startText;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Image} */
	startButton_1;
	/** @type {Phaser.GameObjects.Text} */
	copyText;
	/** @type {Phaser.GameObjects.Text[]} */
	playerNames;
	/** @type {Phaser.GameObjects.Image[]} */
	playerIcons;
	/** @type {Phaser.FX.Shine[]} */
	playerShines;

	/* START-USER-CODE */

	// Write your code here

	/**
	 * 
	 * @param {{hostId, players, currentLobbyId}} lobbyInfo 
	 */
	init({lobbyInfo, isHost}) {
		this.players = lobbyInfo.players;
		this.currentLobbyId = lobbyInfo.currentLobbyId;
		this.isHost = isHost;
		console.log(lobbyInfo.currentLobbyId);
	}

	create() {

		this.editorCreate();

		// Placeholder player list
        // const players = ["Player1", "You", "Player2", "Player3"];
		this.playerNameGroup = this.add.group();
		this.updatePlayerList(this.players);

		if (!this.isHost) {
			this.startButton.setVisible(false);
			this.startText.setVisible(false);
		}

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
			socket.off("game:started");
    	});

		// Lobby code

		if (this.currentLobbyId) {
			this.text.setText(this.currentLobbyId);
		}


	}

	updatePlayerList(players) {
		this.playerNameGroup.clear(true, true);
		// player
		// players.forEach((player, index) => {
        //     const text = this.add.text(125, 270 + index * 50, generateName(player), {
		// 		fontFamily: "Eczar-Bold",
        //         fontSize: "32px",
        //         color: "#c2c2c2",
		// 		stroke: "#000000",
		// 		strokeThickness: 16,
        //     }).setOrigin(0,0.5);
		// 	this.playerNameGroup.add(text);
        // });
		for (let i = 1; i < this.playerNames.length; i++) {
			this.playerNames[i].setText("Empty Slot");
			this.playerNames[i].setColor("#393333ff");
			this.playerIcons[i].setTexture("100x100-Empty");

			this.playerShines[i].setActive(false);
		}

		players.forEach((player, i) => {
			if (i !== 0) {
				this.playerIcons[i].setTexture("100x100-Blue");
				this.playerNames[i].setColor("#ffffff");
				this.playerShines[i].setActive(true);
			}
			this.playerNames[i].setText(generateName(player));
		});

		if (players.length > 1) {
			this.startButton.setAlpha(1);
			this.startText.setAlpha(1);
			this.startButton.input.enabled = true;
		} else {
			this.startButton.setAlpha(0.25);
			this.startText.setAlpha(0.25);
			this.startButton.input.enabled = false;
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
