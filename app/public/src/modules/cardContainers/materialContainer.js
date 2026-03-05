import { baseContainer } from "./baseContainer.js";

function getMainImageKey(name) {
    const map = {
        log: "Chopped Log",
        pillow : "Pillow",
        crystal : "Energy Crystal 3X",
        nails : "Nails",
        sword : "Sword",
        mushroom : "Mushroom"
    };  

    return map[name] || "Chopped Log";
}

export class materialContainer extends baseContainer {
    /* -------------------------------------------------------------------------- */
    /*                                 Constructor                                */
    /* -------------------------------------------------------------------------- */

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(scene, cardInfo, x = 0, y = 0) {
        super(scene, x, y);
        
        /* --------------------------------- Visual --------------------------------- */

        this.imageKey = getMainImageKey(cardInfo.card.name);
        this.cardInfo = cardInfo;
        this.scene = scene;

        // Slightly modified compiler-made code
        
        // cardFront
		const cardBack = scene.add.image(0, 0, "Card back");
		cardBack.scaleX = 0.25;
		cardBack.scaleY = 0.25;
        this.cardBack = cardBack;

		// cardFront
		const cardFront = scene.add.image(0, 0, "White_silver Card Front");
		cardFront.scaleX = 0.25;
		cardFront.scaleY = 0.25;
        this.cardFront = cardFront;

		// powerText
		const powerText = scene.add.text(-32, 48, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = `${this.cardInfo.card.attackValue} POW`;
		powerText.setStyle({ "color": "#f5786b", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
        this.powerText = powerText;

		// DefenseText
		const defenseText = scene.add.text(32, 48, "", {});
		defenseText.setOrigin(0.5, 0.5);
		defenseText.text = `${this.cardInfo.card.defenseValue} DEF`;
		defenseText.setStyle({ "color": "#3878d7", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
        this.defenseText = defenseText;

		// energyText
		const energyText = scene.add.text(0, 64, "", {});
		energyText.setOrigin(0.5, 0.5);
		energyText.text = `${this.cardInfo.card.energyValue} ENG`;
		energyText.setStyle({ "color": "#1bc540", "fontFamily": "Eczar-Bold", "fontSize": "12px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
        this.energyText = energyText;

		// nameText
		const nameText = scene.add.text(0, -80, "", {});
		nameText.setOrigin(0.5, 0.5);
		nameText.text = this.cardInfo.card.name.toUpperCase();
		nameText.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "17px", "stroke": "#000000ff", "strokeThickness": 5, "resolution": 3 });
        this.nameText = nameText;

		// mainImage
		const mainImage = scene.add.image(0, -16, this.imageKey);
		mainImage.scaleX = 0.15;
		mainImage.scaleY = 0.15;
        this.mainImage = mainImage;

		// shadowFx_10
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

        /* ---------------------------- Create Container ---------------------------- */

        const frontItems = [this.cardFront, this.nameText, this.powerText, this.defenseText, this.energyText, this.mainImage];
        const backItems = [this.cardBack];
        this.combineRequired(frontItems, backItems);
        
        scene.add.existing(this);

        /* ---------------------------------- SFXs ---------------------------------- */
        this.clickSFX = scene.sound.add("click");
        this.flipSFX = scene.sound.add("cardFlip");
        this.hoverSFX = scene.sound.add("hover");
        this.hoverSFX.volume = 0.1;
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Animations                                 */
    /* -------------------------------------------------------------------------- */

    flipAnimation() {
        if (this._isFlipping) return;
        this._isFlipping = true;

        this.flipSFX.play();

        const scene = this.scene;

        // Save base transform so repeated flips don't drift
        const base = {
            x: this.x,
            y: this.y,
            scaleX: this.scaleX || 1,
            scaleY: this.scaleY || 1,
            angle: this.angle || 0,
            alpha: this.alpha ?? 1
        };

        // Optional: choose a target to pulse alpha (whole card works too)
        const pulseTarget = this; // or this.frontContainer

        // Small anticipation (tiny dip + squash)
        scene.tweens.add({
            targets: this,
            y: base.y + 3,
            scaleY: base.scaleY * 0.97,
            scaleX: base.scaleX * 1.02,
            angle: base.angle - 1.5,
            duration: 55,
            ease: "Quad.easeOut",
            onComplete: () => {
            // Flip close phase (compress width, bulge height, lift)
            scene.tweens.add({
                targets: this,
                y: base.y - 10,
                scaleX: 0.02,                 // avoid exact 0 to reduce visual popping
                scaleY: base.scaleY * 1.10,
                angle: base.angle + 2.5,
                duration: 120,
                ease: "Cubic.easeIn",
                onStart: () => {
                // subtle alpha pulse to fake shading
                scene.tweens.add({
                    targets: pulseTarget,
                    alpha: Math.max(0.85, base.alpha - 0.12),
                    duration: 100,
                    yoyo: true,
                    ease: "Sine.easeInOut"
                });
                },
                onComplete: () => {
                // Midpoint swap
                this.isFaceUp = !this.isFaceUp;
                this.frontContainer.setVisible(this.isFaceUp);
                this.backContainer.setVisible(!this.isFaceUp);

                // Optional micro "snap" at midpoint for tactile feel
                this.angle = base.angle - 1.5;

                // Open phase (expand width, settle back)
                scene.tweens.add({
                    targets: this,
                    y: base.y - 2,
                    scaleX: base.scaleX * 1.04,   // tiny overshoot
                    scaleY: base.scaleY * 0.98,   // counter-squash
                    angle: base.angle + 1,
                    duration: 115,
                    ease: "Quad.easeOut",
                    onComplete: () => {
                    // Final settle
                    scene.tweens.add({
                        targets: this,
                        y: base.y,
                        scaleX: base.scaleX,
                        scaleY: base.scaleY,
                        angle: base.angle,
                        alpha: base.alpha,
                        duration: 90,
                        ease: "Back.easeOut",
                        onComplete: () => {
                        this._isFlipping = false;
                    }
                });
                }
            });
            }
        });
        }
    });
    }

    hoverAnimation() {
        const scene = this.scene;
        scene.tweens.add({
            targets: this.visualContainer,
            scaleY: 1.50,
            scaleX: 1.50,
            duration: 80,
            ease: "Sine",
        })
        this._zoom = scene.tweens.add({
            targets: this.mainImage,
            scaleY: 0.18,
            scaleX: 0.18,
            duration: 200,
            ease: "Bounce.easeOut",
            onComplete: () => {
                this._plus = scene.tweens.add({
                    targets: this.mainImage,
                    scaleY: 0.20,
                    scaleX: 0.20,
                    duration: 2000,
                    yoyo: true,
                    loop: -1,
                    ease: "Sine.easeInOut",
                })
            }
        })

        this._plusText = scene.tweens.add({
            targets: [this.energyText, this.powerText, this.defenseText, this.nameText],
            scaleY: 1.15,
            scaleX: 1.15,
            duration: 200,
            ease: "Bounce.easeOut",
        })
    }

    unhoverAnimation() {
        if (this._zoom) this._zoom.stop()
        if (this._plus) this._plus.stop();
        if (this._plusText) this._plusText.stop();
        const scene = this.scene;
        scene.tweens.add({
            targets: this.visualContainer,
            scaleY: 1,
            scaleX: 1,
            duration: 70,
            ease: "Bounce"
        })
        scene.tweens.add({
            targets: this.mainImage,
            scaleY: 0.15,
            scaleX: 0.15,
            duration: 40,
            ease: "Bounce"
        })
        scene.tweens.add({
            targets: [this.energyText, this.powerText, this.defenseText, this.nameText],
            scaleY: 1,
            scaleX: 1,
            duration: 40,
            ease: "Bounce"
        })
        this._zoom = undefined;
        this._plus = undefined;
        this._plusText = undefined;
    }
}

    