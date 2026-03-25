
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
		rectangle_1.alpha = 0.75;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 10;

		// soulTarget1
		const soulTarget1 = this.add.image(368, 400, "Knowledge Soul Symbol");
		soulTarget1.scaleX = 0.15;
		soulTarget1.scaleY = 0.15;

		// arcane_Soul_Symbol_1
		const arcane_Soul_Symbol_1 = this.add.image(640, 400, "Knowledge Soul Symbol");
		arcane_Soul_Symbol_1.scaleX = 0.15;
		arcane_Soul_Symbol_1.scaleY = 0.15;

		// arcane_Soul_Symbol_2
		const arcane_Soul_Symbol_2 = this.add.image(912, 400, "Knowledge Soul Symbol");
		arcane_Soul_Symbol_2.scaleX = 0.15;
		arcane_Soul_Symbol_2.scaleY = 0.15;

		// power_Soul_Symbol
		const power_Soul_Symbol = this.add.image(368, 128, "Power Soul Symbol");
		power_Soul_Symbol.scaleX = 0.15;
		power_Soul_Symbol.scaleY = 0.15;

		// power_Soul_Symbol_1
		const power_Soul_Symbol_1 = this.add.image(640, 128, "Power Soul Symbol");
		power_Soul_Symbol_1.scaleX = 0.15;
		power_Soul_Symbol_1.scaleY = 0.15;

		// power_Soul_Symbol_2
		const power_Soul_Symbol_2 = this.add.image(912, 128, "Power Soul Symbol");
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
		const PLAYER_Y = 400;
		const ENEMY_Y  = 128;

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
