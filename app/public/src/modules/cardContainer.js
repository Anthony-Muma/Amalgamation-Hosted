const CARD_FRONT_KEY = "White_silver Card Front"

export class CardContainer extends Phaser.GameObjects.Container {
    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {*} cardInfo 
     */
    constructor(scene, x, y, cardInfo) {
		super(scene, x ?? 0, y ?? 0);

        // FROM SERVER
        this.cardInfo = cardInfo;
        this.imageKey = CardContainer.getMainImageKey(cardInfo.card.name);

        this.frontContainer = this.scene.add.container(0, 0);
        this.backContainer = this.scene.add.container(0, 0);
        this.isFaceUp = false;

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

        // Card front and back
        this.frontContainer.add([this.cardFront, this.nameText, this.powerText, this.defenseText, this.energyText, this.mainImage]);
        this.backContainer.add([this.cardBack]);
        this.add([this.backContainer, this.frontContainer]); // order matters

        this.frontContainer.setVisible(this.isFaceUp);
        this.backContainer.setVisible(!this.isFaceUp);

        // Interactivity
        this.setSize(150, 210);
        this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 210), Phaser.Geom.Rectangle.Contains);

        

        scene.add.existing(this);

        scene.input.setDraggable(this);

        this.on("drag", (_pointer, dragX, dragY) => {
            this.x = dragX;
            this.y = dragY;
        });


        this.on("pointerover", () => this.setScale(1.05));
        this.on("pointerout", () => this.setScale(1));
        // this.on("pointerdown", () => {
        //     console.log(this.cardInfo);
        // });
	}

    static getMainImageKey(name) {
        const map = {
            log: "Chopped Log",
            pillow : "Pillow",
            crystal : "Energy Crystal 3X"
        };
        return map[name] || "Chopped Log";
    }

    getCardInfo() {
        return this.cardInfo;
    }

    flipAnimation() {
        if (this._isFlipping) return;
        this._isFlipping = true;

        this.scene.tweens.add({
            targets: this,
            scaleX: 0,
            duration: 120,
            ease: "Sine",
            onComplete: () => {
            // swap visible side at midpoint
            this.isFaceUp = !this.isFaceUp;

            this.frontContainer.setVisible(this.isFaceUp);
            this.backContainer.setVisible(!this.isFaceUp);

            this.scene.tweens.add({
                targets: this,
                scaleX: 1,
                duration: 120,
                ease: "Sine",
                onComplete: () => {
                this._isFlipping = false;
                }
            });
            }
        });

        }

        // AI generated
        evaporateAnimation() {
            if (this._isEvaporating) return;
            this._isEvaporating = true;

            const scene = this.scene;

            // Particle burst from card position
            const particles = scene.add.particles(this.x, this.y, this.imageKey, {
                speed: { min: 20, max: 90 },
                angle: { min: 0, max: 360 },
                scale: { start: 0.2, end: 0 },
                alpha: { start: 0.8, end: 0 },
                lifespan: { min: 250, max: 600 },
                quantity: 2,
                frequency: 25,
                emitting: true
            });

            // Stop particles shortly after starting
            scene.time.delayedCall(180, () => {
                particles.stop();
            });

            // Destroy particle emitter after particles finish
            scene.time.delayedCall(900, () => {
                particles.destroy();
            });

            // Fade + shrink + slight float up
            scene.tweens.add({
                targets: this,
                alpha: 0,
                scaleX: this.scaleX * 0.85,
                scaleY: this.scaleY * 0.85,
                y: this.y - 18,
                duration: 260,
                ease: "Quad.easeOut",
                onComplete: () => {
                this.setVisible(false); // or this.destroy();
                this._isEvaporating = false;
                }
            });
        }


    // static getCardFront(name) {
    //     const map = {
    //         log: "card-art-log"
    //     };
    //     return map[name] || "card-art-default";
    // }

}
