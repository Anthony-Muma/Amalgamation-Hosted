import { baseContainer } from "./baseContainer.js";
import colorLerpHexFromHex from "../util/colorLerp.js";

function getMainImageKey(name) {
    const map = {
        log: "200x200-Chopped-Log",
        pillow : "200x200-Pillow",
        crystals : "200x200-Energy-Crystals-3X",
        nails : "200x200-Nails",
        sword : "200x200-Sword",
        mushroom : "200x200-Mushroom",
        clock : "200x200-Clock",
        mirror : "200x200-Magic-Mirror",
        bomb : "200x200-Bomb",
        brick : "200x200-Brick",
        shoe : "200x200-Old-Shoe"
    };  
    
    if (!map[name]) console.warn("Warning: No image for `" + name + "` exists");
    
    return map[name] || "200x200-Chopped-Log";
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
        super(scene, cardInfo, x, y);
        /* --------------------------------- Visual --------------------------------- */

        this.imageKey = getMainImageKey(cardInfo.card.name);
        this.cardInfo = cardInfo;
        this.scene = scene;

        const powerValue = cardInfo.card.power;
        const defenseValue = cardInfo.card.defense;
        const energyValue = cardInfo.card.energy;
        const name = cardInfo.card.name;

        // Location of symbols
        let powerLocation = -35
        let defenseLocation = 35
        let energyLocationX = 0
        let energyLocationY = 64

        if (!powerValue) {
            energyLocationX = powerLocation;
            energyLocationY = 40;
        }

        if (!defenseValue) {
            energyLocationX = defenseLocation;
            energyLocationY = 40;
        }

        if (!powerValue && !defenseValue) {
            energyLocationX = 0;
        }

        // Text Color (redish)
        const END_LERP_OFFSET = 7;
        const START_LERP_OFFSET = 2;

        const powerTintLerpAlpha = Phaser.Math.Clamp((powerValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET), 0, 1);
        const defenseTintLerpAlpha = Phaser.Math.Clamp((defenseValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET), 0, 1);
        const energyTintLerpAlpha = Phaser.Math.Clamp((energyValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET), 0, 1)
        
        const MIN_TEXT_PX = 22;
        const MAX_TEXT_PX = 32;
        const powerTextSize = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_TEXT_PX, MAX_TEXT_PX, (powerValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_TEXT_PX, MAX_TEXT_PX + 12);
        const defenseTextSize = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_TEXT_PX, MAX_TEXT_PX, (defenseValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_TEXT_PX, MAX_TEXT_PX + 12);
        const energyTextSize = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_TEXT_PX, MAX_TEXT_PX, (energyValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_TEXT_PX, MAX_TEXT_PX + 12);

        const MIN_ALPHA = 0.1;
        const MAX_ALPHA = 1;
        const powerAlpha = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_ALPHA, MAX_ALPHA, (powerValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_ALPHA, MAX_ALPHA);
        const defenseAlpha = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_ALPHA, MAX_ALPHA, (defenseValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_ALPHA, MAX_ALPHA);
        const energyAlpha = Phaser.Math.Clamp(Phaser.Math.Linear(MIN_ALPHA, MAX_ALPHA, (energyValue - START_LERP_OFFSET)/(END_LERP_OFFSET - START_LERP_OFFSET)), MIN_ALPHA, MAX_ALPHA);
        // title.text = name.toUpperCase();
        // const mainImage = scene.add.image(0, -32, this.imageKey);
        //const defenseSymbol = scene.add.image(defenseLocation, 40, "100x100-Blue-Shield");
        // defenseText.tintTopLeft = colorLerpHexFromHex(defenseTintLerpAlpha , "0xff0000", "0xffffff");
        // NON-COMPILED
        
        // Slightly modified compiler-made code

        // cardBack
        const cardBack = scene.add.image(0, 0, "200x280-Card-Back");
		cardBack.scaleX = 0.8;
		cardBack.scaleY = 0.8;

		// cardFront
		const cardFront = scene.add.image(0, 0, "200x280-Bright-White-Card");
		cardFront.scaleX = 0.8;
		cardFront.scaleY = 0.8;
		cardFront.tintTopLeft = 9803157;
		cardFront.tintTopRight = 9803157;
		cardFront.tintBottomLeft = 0;
		cardFront.tintBottomRight = 0;
		this.add(cardFront);

		// mainImage
		const mainImage = scene.add.image(0, -36, this.imageKey);
		mainImage.scaleX = 0.6;
		mainImage.scaleY = 0.6;
		this.add(mainImage);

		// shadowFx
		mainImage.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// title
		const title = scene.add.text(0, -88, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = name.toUpperCase();
		title.setStyle({ "fontFamily": "Eczar-Bold", "fontSize": "18px", "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(title);

		// defenseSymbol
		const defenseSymbol = scene.add.image(defenseLocation, 40, "100x100-Blue-Shield");
		defenseSymbol.scaleX = 0.8;
		defenseSymbol.scaleY = 0.8;
        defenseSymbol.alpha = defenseAlpha;
		this.add(defenseSymbol);

		// powerSymbol
		const powerSymbol = scene.add.image(powerLocation, 40, "100x100-Power");
		powerSymbol.scaleX = 0.8;
		powerSymbol.scaleY = 0.8;
        powerSymbol.alpha = powerAlpha;
		this.add(powerSymbol);

		// energySymbol
		const energySymbol = scene.add.image(energyLocationX, energyLocationY, "100x100-Energy");
		energySymbol.scaleX = 0.8;
		energySymbol.scaleY = 0.8;
        energySymbol.alpha = energyAlpha;
		this.add(energySymbol);

		// powerText
		const powerText = scene.add.text(powerLocation, 40, "", {});
		powerText.setOrigin(0.5, 0.5);
		powerText.text = powerValue;
		powerText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": `${powerTextSize}px`, "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(powerText);

		// defenseText
		const defenseText = scene.add.text(defenseLocation, 40, "", {});
		defenseText.setOrigin(0.5, 0.5);
		defenseText.text = defenseValue;
		defenseText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": `${defenseTextSize}px`, "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(defenseText);

		// energyText
		const energyText = scene.add.text(energyLocationX, energyLocationY, "", {});
		energyText.setOrigin(0.5, 0.5);
		energyText.text = energyValue;
		energyText.setStyle({ "color": "#ffffffff", "fontFamily": "Eczar-Bold", "fontSize": `${energyTextSize}px`, "stroke": "#000000ff", "strokeThickness": 5, "shadow.blur": 12, "shadow.stroke": true, "resolution": 3 });
		this.add(energyText);

        defenseText.tintTopLeft = colorLerpHexFromHex(defenseTintLerpAlpha , "0xff0000", "0xffffff");
        powerText.tintTopLeft = colorLerpHexFromHex(powerTintLerpAlpha , "0xff0000", "0xffffff");
        energyText.tintTopLeft = colorLerpHexFromHex(energyTintLerpAlpha , "0xff0000", "0xffffff");
        
        if (!defenseValue) {
            defenseSymbol.setVisible(false);
            defenseText.setVisible(false);
        }

        if (!powerValue) {
            powerSymbol.setVisible(false);
            powerText.setVisible(false);
        }

        this.cardBack = cardBack
		this.cardFront = cardFront;
		this.title = title;
		this.mainImage = mainImage;
		this.defenseSymbol = defenseSymbol;
		this.powerSymbol = powerSymbol;
        this.energySymbol = energySymbol;
		this.powerText = powerText;
		this.defenseText = defenseText;
		this.energyText = energyText;

        /* ---------------------------- Create Container ---------------------------- */

        const frontItems = [
            this.cardFront,
            this.title,
            this.defenseSymbol,
            this.powerSymbol,
            this.energySymbol,
            this.mainImage,
            this.powerText,
            this.defenseText,
            this.energyText
        ];

        const backItems = [this.cardBack];
        this.combineRequired(frontItems, backItems);
        
        scene.add.existing(this);

        this.base = {
            x: this.x,
            y: this.y,
            scaleX: this.scaleX || 1,
            scaleY: this.scaleY || 1,
            angle: this.angle || 0,
            alpha: this.alpha ?? 1
        };
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
        scene.tweens.add({
            targets: this.visualContainer,
            scaleY: 1.50,
            scaleX: 1.50,
            duration: 80,
            ease: "Sine",
        })
        this._zoom = scene.tweens.add({
            targets: this.mainImage,
            scaleY: 0.70,
            scaleX: 0.70,
            duration: 200,
            ease: "Bounce.easeOut",
            onComplete: () => {
                this._plus = scene.tweens.add({
                    targets: this.mainImage,
                    scaleY: 0.77,
                    scaleX: 0.77,
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
            scaleY: 0.6,
            scaleX: 0.6,
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

    