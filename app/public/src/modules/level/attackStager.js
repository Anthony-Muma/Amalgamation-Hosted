const BASE_SCALE = 3;
const TARGET_SCALE = 2;

export class AttackStager {
    /**
     * 
     * @param {Phaser.Scene} scene 
     */
    constructor(scene, playerId, playerAmalgamations, enemyAmalgamations) { 
        this.queue = []
        this.scene = scene;
        this.playerId = playerId;
        this.playerAmalgamations = playerAmalgamations;
        this.enemyAmalgamations = enemyAmalgamations;

        this.isProcessing = false;
        this.current
    }

    isActive() {
        return (this.queue.length !== 0 || this.isProcessing);
    }

    addToQueue(queueData) {
        this.queue.push(...queueData);

        if (!this.isProcessing) {
            this.isProcessing = true;
            this.#processNextQueueObject();
        }
    }

    #processNextQueueObject() {
        const queueObject = this.queue.shift();

        // end of queue
        if (!queueObject) {
            this.isProcessing = false;
            return;
        };

        const {action, target, info} = queueObject;
        const {playerIndex, amalgamationIndex} = target;
        const targetAmalgamation = this.#getAmalgamation(playerIndex, amalgamationIndex);

        switch (action) {
            case "startAttack":
                this.#startAttack(info, targetAmalgamation);
                break;
            
            case "damageStamp":
                this.#damageStamp(info, targetAmalgamation);
                break;

            case "defenseFlip":
                this.#defenseFlip(info, targetAmalgamation);
                break;

            case "directDamage":
                this.#directDamage(info, targetAmalgamation);
                break;
        }
    }

    #getAmalgamation(playerIndex, amalgamationIndex) {
        if (playerIndex === this.playerId) {
            return this.playerAmalgamations[amalgamationIndex];
        } else {
            return this.enemyAmalgamations[amalgamationIndex];
        }
    }

    #startAttack(info, targetAmalgamation) {
        this.#processNextQueueObject();
    }

    #damageStamp(info, targetAmalgamation) {
        const damageAmount = info;

        /** @type {{ damageStampText: Phaser.GameObjects.Text, damageStampIcon: Phaser.GameObjects.Image }} */
        const {damageStampText, damageStampIcon} = this.scene;

        // Setup

        damageStampIcon.setAlpha(0);
        damageStampText.setAlpha(0);

        damageStampIcon.setDepth(10);
        damageStampText.setDepth(11);

        damageStampText.setText(damageAmount.toString());

        damageStampIcon.setPosition(targetAmalgamation.x, targetAmalgamation.y);
        damageStampText.setPosition(targetAmalgamation.x, targetAmalgamation.y);

        // Animation

        const chain = this.scene.tweens.chain({
            targets: [damageStampIcon, damageStampText],
            paused: true,

            onComplete: () => {
                this.#processNextQueueObject();
            },

            tweens:[
                {
                    scale: BASE_SCALE + 0.1,
                    alpha: 1,
                    ease: "Sine.easeOut",
                    duration: 300,
                },
                {
                    scale: TARGET_SCALE,
                    alpha: 0,
                    ease: "Sine.easeOut",
                    duration: 300,
                }
            ]
        });

        chain.play();
    }

    #defenseFlip(info, targetAmalgamation) {
        const {defenseObject, popped} = info;
        
         /** @type {{ defenseFlipText: Phaser.GameObjects.Text, defenseFlipIcon: Phaser.GameObjects.Image }} */
        const {defenseFlipText, defenseFlipIcon} = this.scene;

        // Setup
        
        defenseFlipIcon.setAlpha(0);
        defenseFlipText.setAlpha(0);

        defenseFlipIcon.setDepth(10);
        defenseFlipText.setDepth(11);

        defenseFlipText.setText(targetAmalgamation.getTopDefenseText());

        defenseFlipIcon.setPosition(targetAmalgamation.x, targetAmalgamation.y);
        defenseFlipText.setPosition(targetAmalgamation.x, targetAmalgamation.y);

        // Animation

        const chain = this.scene.tweens.chain({
            targets: [defenseFlipIcon, defenseFlipText],
            paused: true,

            onStart: () => {
                targetAmalgamation.setTopDefense(defenseObject.defense)
                if (popped) targetAmalgamation.removeDefense();
            },

            onComplete: () => {
                this.#processNextQueueObject();
            },

            tweens:[
                {
                    scale: BASE_SCALE + 0.1,
                    alpha: 1,
                    ease: "Sine.easeOut",
                    duration: 300,

                    onComplete: () =>{
                        defenseFlipText.setText(defenseObject.defense);
                    }
                },
                {
                    scale: TARGET_SCALE,
                    alpha: 0,
                    ease: "Sine.easeOut",
                    duration: 300,
                }
            ]
        });

        chain.play();

    }

    #directDamage(info, targetAmalgamation) {
        const {alive, healthPointDifference} = info;

        /** @type {{ directDamageText: Phaser.GameObjects.Text, directDamageIcon: Phaser.GameObjects.Image }} */
        const {directDamageText, directDamageIcon} = this.scene;

        // Setup
        
        directDamageIcon.setAlpha(0);
        directDamageText.setAlpha(0);

        directDamageIcon.setDepth(10);
        directDamageText.setDepth(11);

        directDamageText.setText("-" + healthPointDifference.toString());

        directDamageIcon.setPosition(targetAmalgamation.x, targetAmalgamation.y);
        directDamageText.setPosition(targetAmalgamation.x, targetAmalgamation.y);

        // Animation

        const chain = this.scene.tweens.chain({
            targets: [directDamageIcon, directDamageText],
            paused: true,

            onStart: () => {
                targetAmalgamation.decreaseHealth(healthPointDifference);
                if (!alive) targetAmalgamation.kill();
            },

            onComplete: () => {
                this.#processNextQueueObject();
            },

            tweens:[
                {
                    scale: BASE_SCALE + 0.1,
                    alpha: 1,
                    ease: "Sine.easeOut",
                    duration: 300,
                },
                {
                    scale: TARGET_SCALE,
                    alpha: 0,
                    ease: "Sine.easeOut",
                    duration: 300,
                }
            ]
        });

        chain.play();

    }
}
