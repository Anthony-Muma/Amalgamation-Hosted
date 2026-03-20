import { baseContainer } from "./baseContainer.js";

function getSoulSymbol(name) {
    const map = {
        power: "200x200-Power-Soul",
        knowledge : "200x200-Knowledge-Soul-Symbol",
        protector : "200x200-Protector-Soul",
        arcane : "200x200-Arcane-Soul",
        vital : "200x200-Vital-Soul"
    };  

    return map[name] || "Chopped Log";
}

function getCardFront(name) {
    const map = {
        knowledge: "200x280-Knowledge-Soul-Card",
        power : "200x280-Power-Soul-Card",
        protector : "200x280-Protector-Soul-Card",
        arcane : "200x280-Arcane-Soul-Card",
        vital : "200x280-Vital-Soul-Card"
    };  

    return map[name] || "Chopped Log";
}


function getTitle(name) {
    const map = {
        power: "200x200-Power-Soul-Title",
        knowledge : "200x200-Knowledge-Soul-Title",
        protector : "200x200-Protector-Soul-Title",
        arcane : "200x200-Arcane-Soul-Title",
        vital : "200x200-Vital-Soul-Title"
    };  

    return map[name] || "Chopped Log";
}


export class soulContainer extends baseContainer {
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
        super(scene, cardInfo, x, y);
        
        /* --------------------------------- Visual --------------------------------- */

        this.symbolKey = getSoulSymbol(cardInfo.card.name);
        this.cardFrontKey = getCardFront(cardInfo.card.name);
        this.titleKey = getTitle(cardInfo.card.name);
        this.cardInfo = cardInfo;
        this.scene = scene;

        // Slightly modified compiler-made code
        
        // cardFront
        const cardBack = scene.add.image(0, 0, "200x280-Card-Back");
        cardBack.scaleX = 0.8;
        cardBack.scaleY = 0.8;

        // cardFront
		const cardFront = scene.add.image(0, 0, this.cardFrontKey);
		cardFront.scaleX = 0.8;
		cardFront.scaleY = 0.8;

		// shineFx
		cardFront.preFX.addShine(0.5, 0.5, 3, false);

		// title
		const title = scene.add.image(0, 64, this.titleKey);
		title.scaleX = 0.8;
		title.scaleY = 0.8;

		// soulSymbol
		const soulSymbol = scene.add.image(0, -32, this.symbolKey);
		soulSymbol.scaleX = 0.6;
		soulSymbol.scaleY = 0.6;

        this.cardBack = cardBack;
		this.cardFront = cardFront;
		this.title = title;
		this.soulSymbol = soulSymbol;

        // shadowFx_1
		// title.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

        /* ---------------------------- Create Container ---------------------------- */

        const frontItems = [this.cardFront, this.soulSymbol, this.title];
        const backItems = [this.cardBack];
        this.combineRequired(frontItems, backItems);
        
        scene.add.existing(this);
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Animations                                 */
    /* -------------------------------------------------------------------------- */

    flipAnimation() {
        if (this._isFlipping) return;
        this._isFlipping = true;

        this.scene.sfx.flip.play();

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
        scene.sfx.click.play();

        // Scale up the whole card
        scene.tweens.add({
            targets: this.visualContainer,
            scaleY: 1.50,
            scaleX: 1.50,
            duration: 80,
            ease: "Sine",
        });

        // Zoom in the soul symbol with a bounce, then pulse it
        this._zoom = scene.tweens.add({
            targets: this.soulSymbol,
            scaleY: 0.70,
            scaleX: 0.70,
            duration: 200,
            ease: "Bounce.easeOut",
            onComplete: () => {
                this._plus = scene.tweens.add({
                    targets: this.soulSymbol,
                    scaleY: 0.77,
                    scaleX: 0.77,
                    duration: 2000,
                    yoyo: true,
                    loop: -1,
                    ease: "Sine.easeInOut",
                });
            }
        });

        // Scale up the title slightly
        this._titleTween = scene.tweens.add({
            targets: this.title,
            scaleY: 1,
            scaleX: 1,
            duration: 200,
            ease: "Bounce.easeOut",
        });
    }

    unhoverAnimation() {
        if (this._zoom) this._zoom.stop();
        if (this._plus) this._plus.stop();
        if (this._titleTween) this._titleTween.stop();

        const scene = this.scene;

        // Scale card back to normal
        scene.tweens.add({
            targets: this.visualContainer,
            scaleY: 1,
            scaleX: 1,
            duration: 70,
            ease: "Bounce"
        });

        // Reset soul symbol
        scene.tweens.add({
            targets: this.soulSymbol,
            scaleY: 0.60,
            scaleX: 0.60,
            duration: 40,
            ease: "Bounce"
        });

        // Reset title
        scene.tweens.add({
            targets: this.title,
            scaleY: 0.8,
            scaleX: 0.8,
            duration: 40,
            ease: "Bounce"
        });

        this._zoom = undefined;
        this._plus = undefined;
        this._titleTween = undefined;
    }
}

    