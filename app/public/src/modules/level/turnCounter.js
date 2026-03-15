const FULL_COLOR = "0xffffff"
const EMPTY_COLOR = "0xae0000"

class TurnCounter {
    #scene;
    /**
         * @type {Phaser.GameObjects.Text}
         */
    #placementsLeftText;
    #totalPlacementPerTurn;
    #placementsLeft;

    constructor(scene, totalPlacementPerTurn) {
        this.#scene = scene;
        this.#totalPlacementPerTurn = totalPlacementPerTurn;
        this.#placementsLeft = totalPlacementPerTurn;
        
        this.#placementsLeftText = scene.placementsLeftText;
        this.#updateText();
    }

    changeTotalPlacement(newMax) {
        this.#totalPlacementPerTurn = newMax;
        this.#updateText();
    }

    resetTurnCounter() {
        this.#placementsLeft = this.#totalPlacementPerTurn;
        this.#updateText();
    }

    decrementTurn() {
        if (this.#placementsLeft >= 1) {
            this.#placementsLeft -= 1;
            this.#updateText();
        }
    }

    canPlace() {
        return (this.#placementsLeft <= 0);
    }

    #updateText() {
        this.#placementsLeftText.text = (this.#placementsLeft.toString() + "/" + this.#totalPlacementPerTurn.toString());
        
        // Color lerp

        const color1 = Phaser.Display.Color.ValueToColor(FULL_COLOR);
        const color2 = Phaser.Display.Color.ValueToColor(EMPTY_COLOR);
        const interpolatedColorObject = Phaser.Display.Color.Interpolate.ColorWithColor(
            color2, 
            color1, 
            1, 
            this.#placementsLeft / this.#totalPlacementPerTurn
        );
        
        this.#placementsLeftText.setColor(Phaser.Display.Color.RGBToString(
            interpolatedColorObject.r, 
            interpolatedColorObject.g, 
            interpolatedColorObject.b
        ));
    }
}

export {TurnCounter}