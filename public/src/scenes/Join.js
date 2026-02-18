
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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
		userTextBox.isFilled = true;

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

		// User Input (Not Working)
        const inputElement = document.createElement("input");
    	inputElement.type = "text";
    	inputElement.placeholder = "Enter code";
    	inputElement.style.fontSize = "28px";
    	inputElement.style.padding = "10px";
    	inputElement.style.width = "250px";
    	inputElement.style.color = "#000000";
    	inputElement.style.textAlign = "center";
    	inputElement.style.border = "none";
    	inputElement.style.borderRadius = "4px";
    	inputElement.style.outline = "none";

		const input = this.add.dom(640, 300, inputElement);
		const inputNode = inputElement;
		input.node.focus();

		// Click Enter button
        this.enterButton.on("pointerdown", () => {
			const code = inputNode.value;
            console.log("Entered code: ", code);

            this.scene.start("Lobby");
        });

        // Press Enter key
        this.input.keyboard.on("keydown-ENTER", () => {
            const code = inputNode.value;
            console.log("Entered code: ", code);

            this.scene.start("Lobby");
        });

		// Back button
        this.backButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
