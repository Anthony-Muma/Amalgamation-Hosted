// Hitbox
const SIZE_X = 150;
const SIZE_Y = 210;

const DEFAULT_MAX_DEFENSE = 3;

const QUEUE_TYPES = Object.freeze({
    START_ATTACK : "startAttack",
    DAMAGE_STAMP : "damageStamp",
    DEFENSE_FLIP : "defenseFlip",
    DIRECT_DAMAGE : "directDamage"
});

const DEFENSE_BLUE = "0x3878d7"
const DEFENSE_GREY = "0x272727"

export class AmalgamationContainer extends Phaser.GameObjects.Container {

    /* -------------------------------------------------------------------------- */
    /*                                 Constructor                                */
    /* -------------------------------------------------------------------------- */

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {import("../../types.js").AmalgamationInfo} amalgamationInfo
     * @param {number} x 
     * @param {number} y 
     */
    constructor(scene, amalgamationInfo, x = 0, y = 0) {
        super(scene, x, y);
        this.scene = scene;
        this.amalgamationInfo = amalgamationInfo;

        this._currentDefense = 0;

        /* --------------------------------- Visual --------------------------------- */
        // cardBack
		const cardBack = scene.add.image(0, 0, "Character Card Background");
		cardBack.scaleX = 0.27;
		cardBack.scaleY = 0.27;
		this.add(cardBack);

		// heartIcon
		const heartIcon = scene.add.polygon(64, -96, "32 64 4 32 0 20 2 12 8 6 16 4 24 4 28 8 32 14 36 8 40 4 48 4 56 6 62 12 64 20 60 32");
		heartIcon.isFilled = true;
		heartIcon.fillColor = 16087147;
		heartIcon.isStroked = true;
		heartIcon.strokeColor = 0;
		heartIcon.lineWidth = 3;
		this.add(heartIcon);

		// healthText
		const healthText = scene.add.text(64, -96, "", {});
		healthText.setOrigin(0.5, 0.5);
		healthText.text = "5";
		healthText.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(healthText);

		// powerIcon
		const powerIcon = scene.add.polygon(-64, -96, "32 0 64 32 32 64 0 32");
		powerIcon.isFilled = true;
		powerIcon.fillColor = 7145994;
		powerIcon.isStroked = true;
		powerIcon.strokeColor = 0;
		powerIcon.lineWidth = 3;
		this.add(powerIcon);

		// powerText
		const powerText = scene.add.text(-64, -96, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = "0";
		powerText.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(powerText);

		// image
		const image = scene.add.image(0, -16, "Knight");
		image.scaleX = 0.15;
		image.scaleY = 0.15;
		this.add(image);

		// shadowFx_3
		image.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// title
		const title = scene.add.image(0, 80, "Knight Title");
		title.scaleX = 0.12;
		title.scaleY = 0.12;
		this.add(title);

		// defenseSlot0
		const defenseSlot0 = scene.add.polygon(96, -48, "0 24 16 0 48 0 64 24 48 48 16 48");
		defenseSlot0.isFilled = true;
		defenseSlot0.fillColor = 2565927;
		defenseSlot0.isStroked = true;
		defenseSlot0.strokeColor = 0;
		defenseSlot0.lineWidth = 3;
		this.add(defenseSlot0);

		// defenseSlot1
		const defenseSlot1 = scene.add.polygon(96, 0, "0 24 16 0 48 0 64 24 48 48 16 48");
		defenseSlot1.isFilled = true;
		defenseSlot1.fillColor = 2565927;
		defenseSlot1.isStroked = true;
		defenseSlot1.strokeColor = 0;
		defenseSlot1.lineWidth = 3;
		this.add(defenseSlot1);

		// defenseSlot2
		const defenseSlot2 = scene.add.polygon(96, 48, "0 24 16 0 48 0 64 24 48 48 16 48");
		defenseSlot2.isFilled = true;
		defenseSlot2.fillColor = 2565927;
		defenseSlot2.isStroked = true;
		defenseSlot2.strokeColor = 0;
		defenseSlot2.lineWidth = 3;
		this.add(defenseSlot2);

		// defenseText0
		const defenseText0 = scene.add.text(96, -48, "", {});
		defenseText0.setOrigin(0.5, 0.5);
		defenseText0.text = "-";
		defenseText0.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText0);

		// defenseText1
		const defenseText1 = scene.add.text(96, 0, "", {});
		defenseText1.setOrigin(0.5, 0.5);
		defenseText1.text = "-";
		defenseText1.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText1);

		// defenseText2
		const defenseText2 = scene.add.text(96, 48, "", {});
		defenseText2.setOrigin(0.5, 0.5);
		defenseText2.text = "-";
		defenseText2.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "32px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText2);

		// lists
		const defenseSlots = [defenseSlot0, defenseSlot1, defenseSlot2];
		const defenseText = [defenseText0, defenseText1, defenseText2];

		this.healthText = healthText;
		this.powerText = powerText;
		this.defenseSlots = defenseSlots;
		this.defenseText = defenseText;


        // this.visualContainer = this.scene.add.container(0, 0);
        // this.healthContainer = this.scene.add.container(0, 0);
        // this.powerContainer = this.scene.add.container(0, 0);
        // this.defenseContainer = this.scene.add.container(0, 0);

        this.setSize(SIZE_X, SIZE_Y);
        this.setPosition(x, y);

        scene.add.existing(this);
    }

    /* -------------------------------------------------------------------------- */
    /*                                Interactivity                               */
    /* -------------------------------------------------------------------------- */

    enableInteractable() {
        this.setInteractive(
            new Phaser.Geom.Rectangle(0, 0, SIZE_X, SIZE_Y), 
            Phaser.Geom.Rectangle.Contains
        );
    }

    disableInteractable() {
        this.disableInteractive();
    }

    enableHover() {
        if (this._hoverEnabled) return;
        this._hoverEnabled = true;

        this.on("pointerover", () => {
            this.scene.children.bringToTop(this);
            this.focusAnimation();
        });

        this.on("pointerout", () => { this.focusAnimation(); });
    }

    disableHover() {
        this._hoverEnabled = false;
        this.unhoverAnimation();

        this.off("pointerover");
        this.off("pointerout");
    }

    /* -------------------------------------------------------------------------- */
    /*                                   Getter                                   */
    /* -------------------------------------------------------------------------- */
    
    /**
     * 
     * @returns {import("../../types.js").AmalgamationInfo}
     */
    getAmalgamationInfo() {
        return this.AmalgamationInfo;
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Animations                                 */
    /* -------------------------------------------------------------------------- */

    focusAnimation() {
        // throw new Error("focusAnimation() not implemented")
    }   

    unfocusAnimation() {
        // throw new Error("unfocusAnimation() not implemented")
    }

    damageAnimation() {
        // throw new Error("flipAnimation() not implemented")
    }


    /* -------------------------------------------------------------------------- */
    /*                            Amalgamation Methods                            */
    /* -------------------------------------------------------------------------- */

    /**
     * 
     * @param {import("../../types.js").CardInfo} cardInfo 
     */
    addPower(cardInfo) {
        const card = cardInfo.card;
        if (!card.attackValue) return false;

        // visual
        this.powerText.setText((parseInt(this.powerText.text) + cardInfo.card.attackValue).toString());

        return true;
    }

    /**
     * 
     * @param {import("../../types.js").CardInfo} cardInfo 
     */
    addDefense(cardInfo) {
        const card = cardInfo.card;
        if (!card.defenseValue) return false;
        if (this._currentDefense >= this.amalgamationInfo.maxDefense) return false;

        // Visual 
        this.defenseSlots[this._currentDefense].setFillStyle(parseInt(DEFENSE_BLUE, 16));
        this.defenseText[this._currentDefense].setText(card.defenseValue ?? "?")
        this._currentDefense++;
        return true;
    }

    removeDefense(index) {
        if (index < 0 || index >= this._currentDefense) return false;

        // Visual 
        this.defenseSlots[this._currentDefense].setFillStyle(parseInt(DEFENSE_GREY, 16));
        this.defenseText[this._currentDefense].setText("-");
        this._currentDefense--;
        return true;
    }

    startAttack() {

    }

    hitDefense(defenseInfo) {
        console.log(defenseInfo);
    }

    hitDirect(amalgamationInfo) {
        console.log(amalgamationInfo);
    }
    /* -------------------------------------------------------------------------- */
    /*                                    Setup                                   */
    /* -------------------------------------------------------------------------- */

    destroy() {
        super.destroy();
    }
}       