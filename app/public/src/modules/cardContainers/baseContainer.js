// Hitbox
const SIZE_X = 150;
const SIZE_Y = 210;

// Sway 
const SWAY_SENSITIVITY = 0.7;
const SWAY_MAX_ROTATION = 0.2;
const SWAY_SNAPPINESS = 0.1;
const SWAY_SNAPBACK_DURATION = 300;

export class baseContainer extends Phaser.GameObjects.Container {

    /* -------------------------------------------------------------------------- */
    /*                                 Constructor                                */
    /* -------------------------------------------------------------------------- */

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {*} cardInfo
     * @param {number} x 
     * @param {number} y 
     */
    constructor(scene, cardInfo, x = 0, y = 0) {
        super(scene, x, y);
        this.scene = scene;
        this.cardInfo = cardInfo;

        this.visualContainer = this.scene.add.container(0, 0);
        this.frontContainer = this.scene.add.container(0, 0);
        this.backContainer = this.scene.add.container(0, 0);

        this.isFaceUp = false;

        this.setSize(SIZE_X, SIZE_Y);
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

    /* ---------------------------------- Drag ---------------------------------- */

    _onUpdate() {
        if (!this._isDragging) return;
        this.visualContainer.rotation = Phaser.Math.Linear(this.visualContainer.rotation, 0, 0.05);
    }

    enableDrag() {
        if (this._dragEnabled) return;
        this._dragEnabled = true;
        this._isDragging = false;

        this._prevX = this.x; // track previous position

        

        this.scene.input.setDraggable(this, true);

        this.on("dragstart", () =>{
            this._isDragging = true;
            this.scene.children.bringToTop(this);
            this.scene.events.on("update", this._onUpdate, this);
            this.focusAnimation();
            this.disableHover();
        })

        this.on("drag", (_pointer, dragX, dragY) => {
            this.x = dragX;
            this.y = dragY;

            // Used for sway
            const velocityX = dragX - this._prevX;
            const targetRotation = Phaser.Math.Clamp(velocityX * SWAY_SENSITIVITY, -SWAY_MAX_ROTATION, SWAY_MAX_ROTATION);
            this.visualContainer.rotation = Phaser.Math.Linear(this.visualContainer.rotation, targetRotation, SWAY_SNAPPINESS);
            this._prevX = dragX;

            // TODO: add momentum sway
        });

        this.on("dragend", () =>{
            this._isDragging = false;
            this.unfocusAnimation();
            this.scene.events.off("update", this._onUpdate, this);

            this.enableHover();

            // As the event doesn't fire when mouse is already on.
            this.hoverAnimation();

            // Spring back to neutral
            this.scene.tweens.add({
                targets: this.visualContainer,
                rotation: 0,
                duration: SWAY_SNAPBACK_DURATION,
                ease: 'Back.Out'
            });
        });
    }

    disableDrag() {
        this._dragEnabled = false;
        this._isDragging = false;
        this.scene.input.setDraggable(this, false);
        this.scene.events.off("update", this._onUpdate, this);
        this.unfocusAnimation();

        this.off("dragstart");
        this.off("drag");
        this.off("dragend");
    }

    enableHover() {
        if (this._hoverEnabled) return;
        this._hoverEnabled = true;

        this.on("pointerover", () => {
            this.scene.children.bringToTop(this);
            this.hoverAnimation();
        });

        this.on("pointerout", () => { this.unhoverAnimation(); });
    }

    disableHover() {
        this._hoverEnabled = false;
        this.unhoverAnimation();

        this.off("pointerover");
        this.off("pointerout");
    }

    flipCard() {
        // this.isFaceUp = !this.isFaceUp;
        this.flipAnimation();
    }

    /* -------------------------------------------------------------------------- */
    /*                                   Getter                                   */
    /* -------------------------------------------------------------------------- */
    
    /**
     * 
     * @returns {import("./cardFactory").CardInfo}
     */
    getCardInfo() {
        return this.cardInfo;
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Animations                                 */
    /* -------------------------------------------------------------------------- */

    hoverAnimation() {
        // throw new Error("hoverAnimation() not implemented")
    }

    unhoverAnimation() {
        // throw new Error("unhoverAnimation() not implemented")
    }

    focusAnimation() {
        // throw new Error("focusAnimation() not implemented")
    }   

    unfocusAnimation() {
        // throw new Error("unfocusAnimation() not implemented")
    }

    flipAnimation() {
        // throw new Error("flipAnimation() not implemented")
    }

    /* -------------------------------------------------------------------------- */
    /*                                    Setup                                   */
    /* -------------------------------------------------------------------------- */

    /**
     * Required for creating the card container, call within constructor AFTER assets are created
     * @param {Phaser.GameObjects[]} frontItems 
     * @param {Phaser.GameObjects[]} backItems 
     */
    combineRequired(frontItems, backItems) {
        this.frontContainer.add(frontItems);
        this.backContainer.add(backItems);
        this.visualContainer.add([this.backContainer, this.frontContainer]); // order matters
        this.add([this.visualContainer]);

        this.frontContainer.setVisible(this.isFaceUp);
        this.backContainer.setVisible(!this.isFaceUp);
    }

    destroy() {
        this.scene.events.off("update", this._onUpdate, this); // sway event
        super.destroy();
    }
}       