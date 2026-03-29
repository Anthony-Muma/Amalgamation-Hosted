
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { socket } from "../modules/socket.js";
/* END-USER-IMPORTS */

export default class Join extends Phaser.Scene {

	constructor() {
		super("Join");

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
		const _200x200_Black_Blob = this.add.image(640, 320, "200x200-Black-Blob");
		_200x200_Black_Blob.scaleX = 3;
		_200x200_Black_Blob.scaleY = 1.5;
		_200x200_Black_Blob.alpha = 0.5;
		_200x200_Black_Blob.alphaTopLeft = 0.5;
		_200x200_Black_Blob.alphaTopRight = 0.5;
		_200x200_Black_Blob.alphaBottomLeft = 0.5;
		_200x200_Black_Blob.alphaBottomRight = 0.5;

		// backButton1
		const backButton1 = this.add.rectangle(-192, 464, 150, 60);
		backButton1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 60), Phaser.Geom.Rectangle.Contains);
		backButton1.isFilled = true;
		backButton1.fillColor = 11141120;

		// backText1
		const backText1 = this.add.text(-192, 464, "", {});
		backText1.setOrigin(0.5, 0.5);
		backText1.text = "Back";
		backText1.setStyle({ "fontSize": "24px" });

		// userTextBox
		const userTextBox = this.add.rectangle(640, 300, 280, 60);

		// enterButton1
		const enterButton1 = this.add.rectangle(1408, 384, 150, 60);
		enterButton1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 60), Phaser.Geom.Rectangle.Contains);
		enterButton1.isFilled = true;
		enterButton1.fillColor = 43520;

		// enterText1
		const enterText1 = this.add.text(1408, 384, "", {});
		enterText1.setOrigin(0.5, 0.5);
		enterText1.text = "Enter";
		enterText1.setStyle({ "fontSize": "24px" });

		// text_5
		const text_5 = this.add.text(640, 64, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "Enter Lobby Code";
		text_5.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true });

		// backButton
		const backButton = this.add.image(192, 656, "500x200-Bar");
		backButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 480, 150), Phaser.Geom.Rectangle.Contains);
		backButton.scaleX = 0.75;
		backButton.scaleY = 0.75;

		// shadowFx
		backButton.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// backText
		const backText = this.add.text(192, 656, "", {});
		backText.setOrigin(0.5, 0.5);
		backText.text = "Back";
		backText.setStyle({ "align": "center", "color": "#f50000ff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		// enterButton
		const enterButton = this.add.image(640, 384, "500x200-Bar");
		enterButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 480, 150), Phaser.Geom.Rectangle.Contains);
		enterButton.scaleX = 0.75;
		enterButton.scaleY = 0.75;

		// shadowFx_1
		enterButton.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// enterText
		const enterText = this.add.text(640, 384, "", {});
		enterText.setOrigin(0.5, 0.5);
		enterText.text = "Enter";
		enterText.setStyle({ "align": "center", "color": "#00f52fff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000", "strokeThickness": 8, "shadow.offsetX": 8, "shadow.offsetY": 8, "shadow.color": "#201f1fff", "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });

		this.backButton1 = backButton1;
		this.backText1 = backText1;
		this.userTextBox = userTextBox;
		this.enterButton1 = enterButton1;
		this.enterText1 = enterText1;
		this.backButton = backButton;
		this.backText = backText;
		this.enterButton = enterButton;
		this.enterText = enterText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	backButton1;
	/** @type {Phaser.GameObjects.Text} */
	backText1;
	/** @type {Phaser.GameObjects.Rectangle} */
	userTextBox;
	/** @type {Phaser.GameObjects.Rectangle} */
	enterButton1;
	/** @type {Phaser.GameObjects.Text} */
	enterText1;
	/** @type {Phaser.GameObjects.Image} */
	backButton;
	/** @type {Phaser.GameObjects.Text} */
	backText;
	/** @type {Phaser.GameObjects.Image} */
	enterButton;
	/** @type {Phaser.GameObjects.Text} */
	enterText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// x, y are Phaser world coords (great for UI placement)
		this.nameInput = this.add.dom(630, 280, "input", {
			type: "text",
			placeholder: "Enter code",
			fontSize: "28px",
			padding: "10px",
			width: "250px"
		});

		console.log(this.nameInput, this.nameInput?.node);

		// optional: focus it
		this.nameInput.node.focus();

		// const inputNode = inputElement;
		// input.node.focus();

		// Click Enter button
        this.enterButton.on("pointerdown", () => {
			const code = this.nameInput.node.value.toUpperCase().trim();;
            console.log("Entered code: ", code);

           	// Request to join lobby
			socket.emit("lobby:join", code)
        });

        // Press Enter key
        this.input.keyboard.on("keydown-ENTER", () => {
            const code = this.nameInput.node.value.toUpperCase().trim();

            console.log("Entered code: ", code);

			// Request to join lobby
			socket.emit("lobby:join", code)
        });

		// Back button
        this.backButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });

		/* -------------------------------------------------------------------------- */
		/* Socket event
		/* -------------------------------------------------------------------------- */
		socket.on("lobby:joined", (lobbyInfo)=>{
			/*
				// NOTE: on the client, needs to start "Lobby scene" with these params {hostId, players, currentLobbyId}
			*/
			this.scene.start("Lobby", {lobbyInfo, isHost: false});
    	});

		socket.on("lobby:failed", (data)=>{
        	alert(data.reasonMessage);
    	});

		this.events.once("shutdown", () => {
			socket.off("lobby:joined");
			socket.off("lobby:failed");
    	});

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
