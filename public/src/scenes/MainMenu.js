
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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

		// createLobbyButton
		const createLobbyButton = this.add.rectangle(344, 344, 128, 128);
		createLobbyButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		createLobbyButton.scaleX = 2;
		createLobbyButton.scaleY = 2;
		createLobbyButton.isFilled = true;
		createLobbyButton.fillColor = 11407890;

		// joinLobbyButton
		const joinLobbyButton = this.add.rectangle(900, 344, 128, 128);
		joinLobbyButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		joinLobbyButton.scaleX = 2;
		joinLobbyButton.scaleY = 2;
		joinLobbyButton.isFilled = true;
		joinLobbyButton.fillColor = 1182070;

		// text_1
		const text_1 = this.add.text(228, 323, "", {});
		text_1.scaleX = 2;
		text_1.scaleY = 2;
		text_1.text = "Create Lobby";
		text_1.setStyle({  });

		// text
		const text = this.add.text(805, 325, "", {});
		text.scaleX = 2;
		text.scaleY = 2;
		text.text = "Join Lobby";
		text.setStyle({  });

		this.createLobbyButton = createLobbyButton;
		this.joinLobbyButton = joinLobbyButton;
		this.text_1 = text_1;
		this.text = text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	createLobbyButton;
	/** @type {Phaser.GameObjects.Rectangle} */
	joinLobbyButton;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.createLobbyButton.on("pointerdown", () => {
        	this.scene.start("Lobby");
		});

		this.joinLobbyButton.on("pointerdown", () => {
        	this.scene.start("Join");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
