
// You can write more code here
const START_RANGE = 150;
const END_RANGE = 30;
const START_SCALE = 0.5;
const END_SCALE = 0.9;
const START_ALPHA = 0.8;
const END_ALPHA = 1;

const DEBUG = false;

const X = [432, 640, 848];
const PLAYER_Y = 384;
const ENEMY_Y  = 128;



/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TargetingScene extends Phaser.Scene {

	constructor() {
		super("TargetingScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 350, 1600, 900);
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.9;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 10;

		// _200x200_Black_Blob
		const _200x200_Black_Blob = this.add.image(624, 352, "200x200-Black-Blob");
		_200x200_Black_Blob.scaleX = 8;
		_200x200_Black_Blob.scaleY = 4;
		_200x200_Black_Blob.alpha = 0.5;
		_200x200_Black_Blob.alphaTopLeft = 0.5;
		_200x200_Black_Blob.alphaTopRight = 0.5;
		_200x200_Black_Blob.alphaBottomLeft = 0.5;
		_200x200_Black_Blob.alphaBottomRight = 0.5;

		// allySoul0
		const allySoul0 = this.add.image(432, 384, "200x200-Knowledge-Soul-Symbol");
		allySoul0.scaleX = 0.9;
		allySoul0.scaleY = 0.9;

		// shineFx_1
		allySoul0.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx
		allySoul0.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// allySoul1
		const allySoul1 = this.add.image(640, 384, "200x200-Knowledge-Soul-Symbol");
		allySoul1.scaleX = 0.9;
		allySoul1.scaleY = 0.9;
		allySoul1.alpha = 0.2;
		allySoul1.alphaTopLeft = 0.2;
		allySoul1.alphaTopRight = 0.2;
		allySoul1.alphaBottomLeft = 0.2;
		allySoul1.alphaBottomRight = 0.2;

		// shineFx
		allySoul1.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx_1
		allySoul1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// allySoul2
		const allySoul2 = this.add.image(848, 384, "200x200-Knowledge-Soul-Symbol");
		allySoul2.scaleX = 0.9;
		allySoul2.scaleY = 0.9;

		// shineFx_2
		allySoul2.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx_2
		allySoul2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// power_Soul_Symbol
		const power_Soul_Symbol = this.add.image(432, 128, "200x200-Power-Soul");
		power_Soul_Symbol.scaleX = 0.9;
		power_Soul_Symbol.scaleY = 0.9;

		// shineFx_3
		power_Soul_Symbol.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx_3
		power_Soul_Symbol.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// power_Soul_Symbol_1
		const power_Soul_Symbol_1 = this.add.image(640, 128, "200x200-Power-Soul");
		power_Soul_Symbol_1.scaleX = 0.9;
		power_Soul_Symbol_1.scaleY = 0.9;

		// shineFx_4
		power_Soul_Symbol_1.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx_4
		power_Soul_Symbol_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// power_Soul_Symbol_2
		const power_Soul_Symbol_2 = this.add.image(848, 128, "200x200-Power-Soul");
		power_Soul_Symbol_2.scaleX = 0.9;
		power_Soul_Symbol_2.scaleY = 0.9;

		// shineFx_5
		power_Soul_Symbol_2.preFX.addShine(0.5, 0.5, 3, false);

		// shadowFx_5
		power_Soul_Symbol_2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// _200x200_Black_Blob_1
		const _200x200_Black_Blob_1 = this.add.image(640, 656, "200x200-Black-Blob");
		_200x200_Black_Blob_1.scaleX = 8;
		_200x200_Black_Blob_1.scaleY = 2;

		// placementsLeftText
		const placementsLeftText = this.add.text(624, 608, "", {});
		placementsLeftText.setOrigin(0.5, 0.5);
		placementsLeftText.text = "TARGETING MODE";
		placementsLeftText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "64px", "stroke": "#000000ff", "strokeThickness": 24, "resolution": 3 });

		// lists
		const allySouls = [allySoul0, allySoul1, allySoul2];
		const enemySouls = [power_Soul_Symbol, power_Soul_Symbol_1, power_Soul_Symbol_2];

		this.placementsLeftText = placementsLeftText;
		this.allySouls = allySouls;
		this.enemySouls = enemySouls;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	placementsLeftText;
	/** @type {Phaser.GameObjects.Image[]} */
	allySouls;
	/** @type {Phaser.GameObjects.Image[]} */
	enemySouls;

	/* START-USER-CODE */

	// Write your code here

	init({onSelectionCb, playerAmalgamations, enemyAmalgamations}) {
		this.amalgamationSelections = {allySelected : null, enemySelected: null};
		this.onSelectionCb = onSelectionCb;
		this.playerAmalgamations = playerAmalgamations;
		this.enemyAmalgamations = enemyAmalgamations;
	}

	create() {

		this.editorCreate();

		this.input.setTopOnly(false);

		const lines = this.add.graphics().setDepth(10);

		const redraw = () => {
			lines.clear();
			const {allySelected, enemySelected} = this.amalgamationSelections;

			if (allySelected === null || enemySelected === null) return;
			lines.lineStyle(15, 0xffffff, 1);
			lines.beginPath();
			lines.moveTo(X[allySelected], PLAYER_Y);
			lines.lineTo(X[enemySelected], ENEMY_Y);
			lines.strokePath();
		};

		// Draw existing lines
		redraw();

		/* ------------------------------- Zone Setup ------------------------------- */

		// Player zones (draggable)
		X.forEach((x, i) => {
			if (!this.playerAmalgamations[i].amalgamationInfo.alive) {
				this.allySouls[i].setVisible(false);
				return;
			}

			const zone = this.add.zone(x, PLAYER_Y, 100, 100)
				.setRectangleDropZone(100, 100)
				.setData({ index: i, type: "ally" });

			this.input.setDraggable(zone);

			if (DEBUG) this.add.rectangle(x, PLAYER_Y, 100, 100)
				.setStrokeStyle(2, 0x0000ff)
				.setFillStyle(0x0000ff, 0.2);	
		});

		// Enemy zones (drop targets)
		X.forEach((x, i) => {
			if (!this.enemyAmalgamations[i].amalgamationInfo.alive) {
				this.enemySouls[i].setVisible(false);
				return;
			}

			this.add.zone(x, ENEMY_Y, 100, 100)
				.setRectangleDropZone(100, 100)
				.setData({ index: i, type: "enemy" });

			if (DEBUG) this.add.rectangle(x, ENEMY_Y, 100, 100)
				.setStrokeStyle(2, 0xff0000)
				.setFillStyle(0xff0000, 0.2);
		});

		/* --------------------------------- Events --------------------------------- */

		this.input.on("dragstart", (pointer, dragged) => {
			this.amalgamationSelections.allySelected = dragged.getData("index");
			this.amalgamationSelections.enemySelected = null;

			lines.clear();

		});

		this.input.on("drag", (pointer, dragged) => {
			lines.clear();

			// Draw live drag line
			lines.lineStyle(10, 0xffffff, 0.6);
			lines.beginPath();
			lines.moveTo(X[dragged.getData("index")], PLAYER_Y);
			lines.lineTo(pointer.x, pointer.y);
			lines.strokePath();
		});

		this.input.on("dragend", (pointer, dragged, dropped) => {
			if (!dropped) {
				this.amalgamationSelections.allySelected = null;
				this.amalgamationSelections.enemySelected = null;

				lines.clear();
			}
		});

		this.input.on("drop", (pointer, dragged, target) => {
			if (target.getData("type") !== "enemy") {
				this.amalgamationSelections.allySelected = null;
				this.amalgamationSelections.enemySelected = null;

				lines.clear();

			} else {
				const draggedIndex = dragged.getData("index");
				const targetIndex = target.getData("index");
				this.amalgamationSelections.enemySelected = targetIndex;

				redraw();

				this.onSelectionCb(draggedIndex, targetIndex);
			}
		});

		// Close Menu Early
		this.input.keyboard.on('keydown-E', ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("TargetingScene");
		});
	}

	update(time, delta) {
		const mouseX = this.input.activePointer.x;
		const mouseY = this.input.activePointer.y;

		this.#updateSoulIcons(this.allySouls, this.amalgamationSelections.allySelected, mouseX, mouseY);
		this.#updateSoulIcons(this.enemySouls, this.amalgamationSelections.enemySelected, mouseX, mouseY);
	}

	#updateSoulIcons(souls, selectedIndex, mouseX, mouseY) {
		souls.forEach((icon, index) => {
			let alpha = 1;
			let scale = END_SCALE;

			if (index !== selectedIndex) {
				const distance = Phaser.Math.Distance.Between(mouseX, mouseY, icon.x, icon.y);
				const t = Phaser.Math.Clamp((distance - START_RANGE) / (END_RANGE - START_RANGE), 0, 1);
				const eased = Phaser.Math.Easing.Sine.In(t);

				alpha = Phaser.Math.Linear(START_ALPHA, END_ALPHA, t);
				scale = START_SCALE + (END_SCALE - START_SCALE) * eased;
			}

			icon.setScale(scale);
			icon.setAlpha(alpha);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
