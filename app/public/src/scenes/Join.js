
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

		// table
		this.add.image(640, 360, "Table");

		// lobbyCodeText
		const lobbyCodeText = this.add.text(640, 150, "", {});
		lobbyCodeText.setOrigin(0.5, 0.5);
		lobbyCodeText.text = "Enter Lobby Code";
		lobbyCodeText.setStyle({ "color": "#ffffffff", "fontSize": "40px", "stroke": "#ffffffff" });

		// backButton
		const backButton = this.add.rectangle(200, 650, 150, 60);
		backButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 60), Phaser.Geom.Rectangle.Contains);
		backButton.isFilled = true;
		backButton.fillColor = 11141120;

		// backText
		const backText = this.add.text(200, 650, "", {});
		backText.setOrigin(0.5, 0.5);
		backText.text = "Back";
		backText.setStyle({ "fontSize": "24px" });

		// userTextBox
		const userTextBox = this.add.rectangle(640, 300, 280, 60);

		// enterButton
		const enterButton = this.add.rectangle(640, 400, 150, 60);
		enterButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 60), Phaser.Geom.Rectangle.Contains);
		enterButton.isFilled = true;
		enterButton.fillColor = 43520;

		// enterText
		const enterText = this.add.text(640, 400, "", {});
		enterText.setOrigin(0.5, 0.5);
		enterText.text = "Enter";
		enterText.setStyle({ "fontSize": "24px" });

		this.lobbyCodeText = lobbyCodeText;
		this.backButton = backButton;
		this.backText = backText;
		this.userTextBox = userTextBox;
		this.enterButton = enterButton;
		this.enterText = enterText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	lobbyCodeText;
	/** @type {Phaser.GameObjects.Rectangle} */
	backButton;
	/** @type {Phaser.GameObjects.Text} */
	backText;
	/** @type {Phaser.GameObjects.Rectangle} */
	userTextBox;
	/** @type {Phaser.GameObjects.Rectangle} */
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
			this.scene.start("Lobby", lobbyInfo);
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
