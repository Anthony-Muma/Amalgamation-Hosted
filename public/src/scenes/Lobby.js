
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
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

		// lobbyTitle
		const lobbyTitle = this.add.text(640, 100, "", {});
		lobbyTitle.setOrigin(0.5, 0.5);
		lobbyTitle.text = "Lobby";
		lobbyTitle.setStyle({ "color": "#ffffffff", "fontSize": "48px", "stroke": "#000000ff", "strokeThickness": 4 });

		// playerListBackground
		const playerListBackground = this.add.rectangle(300, 325, 400, 300);
		playerListBackground.isFilled = true;
		playerListBackground.fillColor = 2236962;

		// text_1
		const text_1 = this.add.text(300, 200, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Players";
		text_1.setStyle({ "align": "center", "color": "#ffffffff", "fontSize": "32px", "stroke": "#000000", "strokeThickness": 3 });

		// leaveButton
		const leaveButton = this.add.rectangle(200, 650, 180, 60);
		leaveButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 180, 60), Phaser.Geom.Rectangle.Contains);
		leaveButton.isFilled = true;
		leaveButton.fillColor = 11141120;

		// leaveText
		const leaveText = this.add.text(200, 650, "", {});
		leaveText.setOrigin(0.5, 0.5);
		leaveText.text = "Leave";
		leaveText.setStyle({ "align": "center", "fontSize": "24px" });

		// startButton
		const startButton = this.add.rectangle(640, 600, 200, 80);
		startButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 200, 80), Phaser.Geom.Rectangle.Contains);
		startButton.isFilled = true;
		startButton.fillColor = 43520;

		// startText
		const startText = this.add.text(640, 600, "", {});
		startText.setOrigin(0.5, 0.5);
		startText.text = "Start";
		startText.setStyle({ "align": "center", "fontSize": "32px" });

		this.lobbyTitle = lobbyTitle;
		this.playerListBackground = playerListBackground;
		this.text_1 = text_1;
		this.leaveButton = leaveButton;
		this.leaveText = leaveText;
		this.startButton = startButton;
		this.startText = startText;

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

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// Placeholder player list
        const players = ["Player1", "You", "Player2", "Player3"];
        players.forEach((player, index) => {
            this.add.text(125, 250 + index * 50, player, {
                fontSize: "28px",
                color: "#ffffff"
            }).setOrigin(0,0.5);
        });

        this.startButton.on("pointerdown", () => {
            console.log("Start Game"); // Placeholder
        });

        this.leaveButton.on("pointerdown", () => {
            this.scene.start("MainMenu");
        });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
