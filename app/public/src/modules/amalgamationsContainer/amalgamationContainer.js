// Hitbox
const SIZE_X = 150;
const SIZE_Y = 210;

const QUEUE_TYPES = Object.freeze({
    START_ATTACK : "startAttack",
    DAMAGE_STAMP : "damageStamp",
    DEFENSE_FLIP : "defenseFlip",
    DIRECT_DAMAGE : "directDamage"
});

const DEFENSE_BLUE_TEXTURE = "100x100-Blue-Shield"
const DEFENSE_GREY_TEXTURE = "100x100-Grey-Shield"

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
    constructor(scene, amalgamationInfo, x = 0, y = 0, tint=0xffffff) {
        super(scene, x, y);
        this.scene = scene;
        this.amalgamationInfo = amalgamationInfo;

        this._currentDefense = 0;

        /* --------------------------------- Visual --------------------------------- */
        
        // COMPILED CODE START (FROM PREFAB)

        // cardBack
		const cardBack = scene.add.image(0, -8, "200x280-Character-Card");
		cardBack.scaleX = 0.8;
		cardBack.scaleY = 0.8;
        cardBack.setTint(tint, tint, tint, tint); // Added after compilation
		this.add(cardBack);

		// title
		const title = scene.add.image(0, 80, "200x200-Wall-Title");
		title.scaleX = 0.5;
		title.scaleY = 0.5;
		this.add(title);

        // // shadowFx_1
		// title.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// mainImage
		const mainImage = scene.add.image(0, -16, "225x285-Wall");
		mainImage.scaleX = 0.6;
		mainImage.scaleY = 0.6;
		this.add(mainImage);

        // shadowFx
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// healthIcon
		const healthIcon = scene.add.image(72, -96, "100x100-Red-Heart");
		healthIcon.scaleX = 0.8;
		healthIcon.scaleY = 0.8;
		this.add(healthIcon);

		// healthText
		const healthText = scene.add.text(72, -96, "", {});
		healthText.setOrigin(0.5, 0.5);
		healthText.text = "-";
		healthText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(healthText);

		// defenseIcon0
		const defenseIcon0 = scene.add.image(80, -48, "100x100-Grey-Shield");
		defenseIcon0.scaleX = 0.8;
		defenseIcon0.scaleY = 0.8;
		this.add(defenseIcon0);

		// defenseText0
		const defenseText0 = scene.add.text(80, -48, "", {});
		defenseText0.setOrigin(0.5, 0.5);
		defenseText0.text = "--";
		defenseText0.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText0);

		// defenseIcon1
		const defenseIcon1 = scene.add.image(96, 0, "100x100-Grey-Shield");
		defenseIcon1.scaleX = 0.8;
		defenseIcon1.scaleY = 0.8;
		this.add(defenseIcon1);

		// defenseText1
		const defenseText1 = scene.add.text(96, 0, "", {});
		defenseText1.setOrigin(0.5, 0.5);
		defenseText1.text = "--";
		defenseText1.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText1);

		// defenseIcon2
		const defenseIcon2 = scene.add.image(112, 48, "100x100-Grey-Shield");
		defenseIcon2.scaleX = 0.8;
		defenseIcon2.scaleY = 0.8;
		this.add(defenseIcon2);

		// defenseText2
		const defenseText2 = scene.add.text(112, 48, "", {});
		defenseText2.setOrigin(0.5, 0.5);
		defenseText2.text = "--";
		defenseText2.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(defenseText2);

		// PowerIcon
		const powerIcon = scene.add.image(-64, -104, "100x100-Power");
		powerIcon.scaleX = 0.8;
		powerIcon.scaleY = 0.8;
		this.add(powerIcon);

		// powerText
		const powerText = scene.add.text(-64, -104, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = "0";
		powerText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": "28px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
		this.add(powerText);

		// lists
		const defenseSlots = [defenseIcon0, defenseIcon1, defenseIcon2];
		const defenseText = [defenseText0, defenseText1, defenseText2];

		this.healthText = healthText;
		this.powerText = powerText;
		this.defenseSlots = defenseSlots;
		this.defenseText = defenseText;

        this.powerIcon = powerIcon;

        // COMPILED CODE END

        // this.visualContainer = this.scene.add.container(0, 0);
        // this.healthContainer = this.scene.add.container(0, 0);
        // this.powerContainer = this.scene.add.container(0, 0);
        // this.defenseContainer = this.scene.add.container(0, 0);

        this.setSize(SIZE_X, SIZE_Y);
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
        if (!card.power) return false;

        this.amalgamationInfo.powerObjectList.push({
            energy : card.power,
            power : card.power
        })

        // visual
        this.powerText.setText((parseInt(this.powerText.text) + cardInfo.card.power).toString());
        this.powerIcon.scaleX += (card.power * 0.01);
        this.powerIcon.scaleY += (card.power * 0.01);
        this.powerText.scaleX += (card.power * 0.01);
        this.powerText.scaleY += (card.power * 0.01);
        return true;
    }

    /**
     * 
     * @param {import("../../types.js").CardInfo} cardInfo 
     */
    addDefense(cardInfo) {
        const card = cardInfo.card;
        if (!card.defense) return false;
        if (this._currentDefense >= this.amalgamationInfo.maxDefense) return false;
        
        // Visual 
        this.defenseSlots[this._currentDefense].setTexture(DEFENSE_BLUE_TEXTURE);
        this.defenseText[this._currentDefense].setText(card.defense ?? "?")
        this._currentDefense++;
        return true;
    }

    removeDefense(index) {
        if (index < 0 || index >= this._currentDefense) return false;

        // Visual 
        this.defenseSlots[this._currentDefense].setTexture(DEFENSE_GREY_TEXTURE);
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