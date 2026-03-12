
// You can write more code here

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
		const rectangle_1 = this.add.rectangle(0, 0, 1280, 720);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.alpha = 0.99;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 10;

		// white_silver_Card_Front_12
		const white_silver_Card_Front_12 = this.add.image(368, 192, "Character Card Background");
		white_silver_Card_Front_12.scaleX = 0.27;
		white_silver_Card_Front_12.scaleY = 0.27;
		white_silver_Card_Front_12.tintTopLeft = 14483456;
		white_silver_Card_Front_12.tintTopRight = 14483456;
		white_silver_Card_Front_12.tintBottomLeft = 14483456;
		white_silver_Card_Front_12.tintBottomRight = 14483456;

		// white_silver_Card_Front_13
		const white_silver_Card_Front_13 = this.add.image(640, 192, "Character Card Background");
		white_silver_Card_Front_13.scaleX = 0.27;
		white_silver_Card_Front_13.scaleY = 0.27;
		white_silver_Card_Front_13.tintTopLeft = 14483456;
		white_silver_Card_Front_13.tintTopRight = 14483456;
		white_silver_Card_Front_13.tintBottomLeft = 14483456;
		white_silver_Card_Front_13.tintBottomRight = 14483456;

		// white_silver_Card_Front_14
		const white_silver_Card_Front_14 = this.add.image(912, 192, "Character Card Background");
		white_silver_Card_Front_14.scaleX = 0.27;
		white_silver_Card_Front_14.scaleY = 0.27;
		white_silver_Card_Front_14.tintTopLeft = 14483456;
		white_silver_Card_Front_14.tintTopRight = 14483456;
		white_silver_Card_Front_14.tintBottomLeft = 14483456;
		white_silver_Card_Front_14.tintBottomRight = 14483456;

		// white_silver_Card_Front
		const white_silver_Card_Front = this.add.image(368, 464, "Character Card Background");
		white_silver_Card_Front.scaleX = 0.27;
		white_silver_Card_Front.scaleY = 0.27;
		white_silver_Card_Front.tintTopLeft = 16777215;
		white_silver_Card_Front.tintTopRight = 16777215;
		white_silver_Card_Front.tintBottomLeft = 16777215;
		white_silver_Card_Front.tintBottomRight = 16777215;

		// white_silver_Card_Front_1
		const white_silver_Card_Front_1 = this.add.image(640, 464, "Character Card Background");
		white_silver_Card_Front_1.scaleX = 0.27;
		white_silver_Card_Front_1.scaleY = 0.27;
		white_silver_Card_Front_1.tintTopLeft = 16777215;
		white_silver_Card_Front_1.tintTopRight = 16777215;
		white_silver_Card_Front_1.tintBottomLeft = 16777215;
		white_silver_Card_Front_1.tintBottomRight = 16777215;

		// white_silver_Card_Front_2
		const white_silver_Card_Front_2 = this.add.image(912, 464, "Character Card Background");
		white_silver_Card_Front_2.scaleX = 0.27;
		white_silver_Card_Front_2.scaleY = 0.27;
		white_silver_Card_Front_2.tintTopLeft = 16777215;
		white_silver_Card_Front_2.tintTopRight = 16777215;
		white_silver_Card_Front_2.tintBottomLeft = 16777215;
		white_silver_Card_Front_2.tintBottomRight = 16777215;

		// arcane_Soul_Symbol
		const arcane_Soul_Symbol = this.add.image(368, 464, "Knowledge Soul Symbol");
		arcane_Soul_Symbol.scaleX = 0.15;
		arcane_Soul_Symbol.scaleY = 0.15;

		// arcane_Soul_Symbol_1
		const arcane_Soul_Symbol_1 = this.add.image(640, 464, "Knowledge Soul Symbol");
		arcane_Soul_Symbol_1.scaleX = 0.15;
		arcane_Soul_Symbol_1.scaleY = 0.15;

		// arcane_Soul_Symbol_2
		const arcane_Soul_Symbol_2 = this.add.image(912, 464, "Knowledge Soul Symbol");
		arcane_Soul_Symbol_2.scaleX = 0.15;
		arcane_Soul_Symbol_2.scaleY = 0.15;

		// power_Soul_Symbol
		const power_Soul_Symbol = this.add.image(368, 192, "Power Soul Symbol");
		power_Soul_Symbol.scaleX = 0.15;
		power_Soul_Symbol.scaleY = 0.15;

		// power_Soul_Symbol_1
		const power_Soul_Symbol_1 = this.add.image(640, 192, "Power Soul Symbol");
		power_Soul_Symbol_1.scaleX = 0.15;
		power_Soul_Symbol_1.scaleY = 0.15;

		// power_Soul_Symbol_2
		const power_Soul_Symbol_2 = this.add.image(912, 192, "Power Soul Symbol");
		power_Soul_Symbol_2.scaleX = 0.15;
		power_Soul_Symbol_2.scaleY = 0.15;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	init(amalgamationTargetList) {
		this.amalgamationTargetList = amalgamationTargetList;
	}

	create() {

		this.editorCreate();

		this.input.keyboard.on('keydown-E', ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("TargetingScene");
		});

		
		this.input.setTopOnly(false);

		const X = [368, 640, 912];
		const PLAYER_Y = 464;
		const ENEMY_Y  = 192;

		const lines = this.add.graphics().setDepth(10);

		const redraw = () => {
			lines.clear();
			this.amalgamationTargetList.forEach((enemyIdx, playerIdx) => {
				if (enemyIdx === null) return;
				lines.lineStyle(10, 0xffaa00, 1);
				lines.beginPath();
				lines.moveTo(X[playerIdx], PLAYER_Y);
				lines.lineTo(X[enemyIdx], ENEMY_Y);
				lines.strokePath();
			});
		};
		// Draw existing lines
		redraw();

		// Player zones (draggable)
		X.forEach((x, i) => {
			const z = this.add.zone(x, PLAYER_Y, 100, 100).setRectangleDropZone(100, 100);
			this.input.setDraggable(z);
			z.setData({ index: i });
		});

		// Enemy zones (drop targets)
		X.forEach((x, i) => {
			this.add.zone(x, ENEMY_Y, 100, 100).setRectangleDropZone(100, 100).setData({ index: i });
		});

		this.input.on("drop", (pointer, dragged, target) => {
			this.amalgamationTargetList[dragged.getData("index")] = target.getData("index");
			redraw();
		});

		this.input.on("drag", (pointer, dragged) => {
			lines.clear();
			
			// Draw confirmed target lines
			this.amalgamationTargetList.forEach((enemyIdx, playerIdx) => {
				if (enemyIdx === null) return;
				lines.lineStyle(2, 0xffaa00, 1);
				lines.beginPath();
				lines.moveTo(X[playerIdx], PLAYER_Y);
				lines.lineTo(X[enemyIdx], ENEMY_Y);
				lines.strokePath();
			});

			// Draw live drag line
			lines.lineStyle(2, 0xffffff, 0.6);
			lines.beginPath();
			lines.moveTo(X[dragged.getData("index")], PLAYER_Y);
			lines.lineTo(pointer.x, pointer.y);
			lines.strokePath();
		});

		this.input.on("dragend", (pointer, dragged, dropped) => {
			if (!dropped) {
				this.amalgamationTargetList[dragged.getData("index")] = null;
				redraw();
			}
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
