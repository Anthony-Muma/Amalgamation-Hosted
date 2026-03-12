export default class Energy {
    #scene;
    #energyPoolText;
    #totalEnergy = 0;

    constructor(scene) {
        this.#scene = scene;
        this.#energyPoolText = scene.energyPoolText;
    }

    resetEnergy() {
        console.log("eenad")
        this.#energyPoolText.text = "0";
        this.#totalEnergy = 0;
    }

    addEnergy(amount) {
        this.#totalEnergy += amount;
        this.#energyPoolText.text = this.#totalEnergy.toString();
    }

    getEnergy() {
        return this.#totalEnergy;
    }
}

export {Energy}