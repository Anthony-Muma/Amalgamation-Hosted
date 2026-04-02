const SHAKE_INTENSITY_MULTIPLIER = 0.2;
const SHAKE_MINIMUM = 1;
const SHAKE_MAXIMUM = 50;

const SCALE_MULTIPLIER = 0.05;

export default class Energy {
   
    constructor(scene) {
        this.scene = scene;

        /** @type {Phaser.GameObjects.Text} */
        this.text = scene.energyPoolText;

        this.totalEnergy = 0;

        // original pos of energyPoolText
        this.originX = this.text.x;
        this.originY = this.text.y;
        this.originScale = this.text.scale;

        scene.events.on('update', this.update, this);
        scene.events.once('shutdown', this.destroy, this);
    }

    resetEnergy() {
        this.totalEnergy = 0;
        this.text.setScale(this.originScale);
        this.text.setText("0");
    }

    addEnergy(amount) {
        this.totalEnergy += amount;
        this.text.setScale(this.originScale + this.totalEnergy * SCALE_MULTIPLIER);
        this.text.setText(this.totalEnergy.toString());
    }

    setEnergy(amount) {
        this.totalEnergy = amount;
        this.text.setScale(this.originScale + this.totalEnergy * SCALE_MULTIPLIER);
        this.text.setText(this.totalEnergy.toString());
    }

    getEnergy() {
        return this.totalEnergy;
    }

    update(time, delta) {

        if (this.totalEnergy <= 0) {
            this.text.setPosition(this.originX, this.originY);
            return;
        }

        const intensity = Phaser.Math.Clamp(this.totalEnergy * SHAKE_INTENSITY_MULTIPLIER, SHAKE_MINIMUM, SHAKE_MAXIMUM);

        this.text.setPosition(
            this.originX + Phaser.Math.Between(-intensity, intensity),
            this.originY + Phaser.Math.Between(-intensity, intensity)
        );
    }

    destroy() {
        this.scene.events.off('update', this.update, this);
    }
}

export {Energy}