// Required
const { cardFactory } = require("./card");
const { material, soul } = require("./dataLoader.js");

// Constants
const CARD_TYPE = "material";
const CARDS = { // Weight is a number. Higher weight means more likely to be drawn. <=0 means impossible to be drawn.
    "log": { getWeight: function(turn) {
        return 90 - turn*7;
    }},
    "sword": { getWeight: function(turn) {
        let w;
        if (turn <= 10) w = 8 + 5*turn
        else if(turn > 10) w = 58 - (turn-10)*6;
        return w;
    }},
    "energy crystal": { getWeight: function(turn) {
        let w = 0 + (turn-1)*2;
        if (turn > 10 && turn <= 15) w += (turn-10)*2
        else if (turn > 15 && turn < 25) w += (turn-15)*4;
        else if (turn >= 25) w = 100;
        return w;
    }},
    
};

// Functions

function chooseCard(turn){

    // Get the total effective weight of all cards.
    let totalW = 0;
    for (const card in CARDS) {

        // Get the weight.
        let w = CARDS[card].getWeight(turn);

        // If less than 0, set to 0.
        if (w < 0) w = 0;

        // Add to the total.
        totalW += w;

    }

    // Choose a random number between 0 and totalW.
    const rand = Math.floor(Math.random() * (totalW + 1));

    // // Iterate through the cards and subtract their weight from rand until rand is less than or equal to 0. 

    // Start adding up the weights of all cards.
    let cumulativeW = 0;
    let chosen;
    for (const card in CARDS) {

        // Get the weight.
        let w = CARDS[card].getWeight(turn);

        // If less than 0, set to 0.
        if (w < 0){
            w = 0;

        }
        // Otherwise, if the weight is greater than 0,
        else {

            // Add to the total.
            cumulativeW += w;

            // If rand surpasses the cumulative weight,
            if (rand <= cumulativeW) {

                // Choose and end.
                chosen = card;
                break;

            }

        }
        
    }

    // Return the chosen card.
    return chosen;

}

/**
 * Generates a card from the deck and returns it.
 * @param {*} turn 
 */
function deckGenerator(turn){

    // Initialize
    let card;

    // Generate the card.
    cardFactory(chooseCard(turn), CARD_TYPE);

    // Return
    return card;

}

function test(){

    // Initialize
    const TURN = 1;
    const TRIALS = 100;
    const results = {
        "log": 0,
        "sword": 0,
        "energy crystal": 0
    };

    // Run
    for (let i = 0; i < TRIALS; i++) {

        const card = chooseCard(TURN);
        results[card]++;
        console.log(`Turn ${TURN}: ${card}`);

    };

    // Print
    console.log("Results:");
    for (const card in results) {
        console.log(`${card}: ${results[card]}`);
    }

}

// test();

module.exports = {
    deckGenerator
}