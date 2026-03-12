
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AttackUI extends Phaser.Scene {

	constructor() {
		super("AttackUI");

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

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	/**
	 * 
	 * @param {{
	 * 		energyPool : number,
	 * 		attackSuccessCb : (attackIndices : number[]) => undefined
	 * }} gameInfo 
	 * @param {{
	 * 		health : number,
	 * 		powerObjectList : { energy : number, power : number }[],
	 * 		defenseObjectList : { defense : number }[]
	 * }			
	 * } amalgamationInfo 
	 */
	init({gameInfo, amalgamationInfo}) {
		this.gameInfo = gameInfo;
		this.amalgamationInfo = amalgamationInfo;
		console.log(amalgamationInfo)
	}

	create() {

		this.editorCreate();

		this.input.keyboard.on('keydown-Q', ()=>{ 
			this.scene.resume("Level");
			this.scene.stop("AttackUI");
		});

		    const { energyPool } = this.gameInfo;
    const { powerObjectList } = this.amalgamationInfo;

    const CX = 640;
    const START_Y = 200;
    const SPACING = 40;

    let selected = new Set();

    // --- Checklist ---
    const checkboxes = powerObjectList.map((power, i) => {
        const y = START_Y + i * SPACING;

        const box = this.add.rectangle(CX - 120, y, 20, 20)
            .setStrokeStyle(2, 0xffffff)
            .setInteractive({ useHandCursor: true });

        const check = this.add.text(CX - 128, y - 8, "✓", { fontSize: "18px", color: "#ffffff" })
            .setVisible(false);

        this.add.text(CX - 95, y - 8, `Power: ${power.power}  Energy: ${power.energy}`, {
            fontSize: "16px", color: "#cccccc"
        });

        box.on("pointerdown", () => {
            if (selected.has(i)) {
                selected.delete(i);
                check.setVisible(false);
                box.setFillStyle(); // clear fill
            } else {
                selected.add(i);
                check.setVisible(true);
                box.setFillStyle(0x448844);
            }
            refresh();
        });

        return { box, check };
    });

    // --- Attack Button ---
    const btnY = START_Y + powerObjectList.length * SPACING + 40;

    const btn = this.add.rectangle(CX, btnY, 160, 44, 0x884444)
        .setInteractive({ useHandCursor: true });

    const btnText = this.add.text(CX, btnY, "ATTACK", {
        fontSize: "20px", color: "#ffffff", fontStyle: "bold"
    }).setOrigin(0.5);

    btn.on("pointerdown", () => {
        if (!canAttack()) return;
        this.gameInfo.attackSuccessCb([...selected]);
		this.scene.stop("AttackUI")
    });

    // --- Totals ---
    const totalsY = btnY + 60;
    const totalsText = this.add.text(CX, totalsY, "", {
        fontSize: "16px", color: "#aaaaaa", align: "center"
    }).setOrigin(0.5);

    // --- Refresh ---
    const canAttack = () => {
        const energyUsed = [...selected].reduce((sum, i) => sum + powerObjectList[i].energy, 0);
        return selected.size > 0 && energyUsed <= energyPool;
    };

    const refresh = () => {
        const totalPower  = [...selected].reduce((sum, i) => sum + powerObjectList[i].power,  0);
        const energyUsed  = [...selected].reduce((sum, i) => sum + powerObjectList[i].energy, 0);

        totalsText.setText(`Total Attack: ${totalPower}    Energy Used: ${energyUsed} / ${energyPool}`);

        const ok = canAttack();
        btn.setFillStyle(ok ? 0x884444 : 0x444444);
        btn.input.cursor = ok ? "pointer" : "default";
        totalsText.setColor(energyUsed > energyPool ? "#ff6666" : "#aaaaaa");
    };

    refresh();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
