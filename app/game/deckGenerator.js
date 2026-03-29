// Required
const { cardFactory } = require("./card");
const { material, soul } = require("./dataLoader.js");

// Constants
const CARD_TYPE = "material";
const CARDS = { // Weight is a number. Higher weight means more likely to be drawn. <=0 means impossible to be drawn.
    "log": { getWeight: function(turn) {
        // Linear decrease
        return 80 - turn*8;
    }},
    "pillow": { getWeight: function(turn) {
        // Linear decrease
        return 40 - turn*3;
    }},
    "nails": { getWeight: function(turn) {
        // Increasing slowly then sharp dropoff
        let w = 0;
        if (turn <= 10) w = 10 + turn*2;
        else if (turn > 10) w = 30 - (turn-10)*6;
        return w;
    }},
    "mushroom": { getWeight: function(turn) {
        // Linear increase then linear decrease all the way to turn 20
        let w = 0;
        if (turn <= 10) w = 5 + turn*3;
        else if (turn > 10 && turn < 20) w = 35 - (turn-10)*3;
        else if (turn >= 20) w = 0;
        return w;
    }},
    "sword": { getWeight: function(turn) {
        // Linear increase, then faster increase, then decrease sharply around turns 17 to 20
        let w = 0;
        if (turn <= 10) w = turn*2;
        else if(turn > 10 && turn <= 16) w = 20 + (turn-10)*4;
        else if (turn > 16 && turn <= 19) w = 44 - (turn-16)*13;
        else if (turn >= 20) w = 0;
        return w;
    }},
    "energy crystal": { getWeight: function(turn) {
        // Exponential increase, 99 weight at turn 20
        let w = turn;
        if (turn > 10 && turn <= 15) w += (turn-10)*2
        else if (turn > 15 && turn < 20) w += (turn-15)*4;
        else if (turn >= 20) w = 99;
        return w;
    }},
    "crystals": { getWeight: function(turn) {
        // Small chance to appear after turn 20
        let w = 0;
        if (turn >= 20) w = 1;
        return w;
    }}
    
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

        // console.log(`Card: ${card}, Weight: ${CARDS[card].getWeight(turn)}`);

        // Get the weight.
        let w = CARDS[card].getWeight(turn);

        // If greater than 0,
        if (w > 0){

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
 * @param {number} turn The current turn number, used to determine card weights.
 * @returns {Object} The generated card.
 */
function deckGenerator(turn){

    // Initialize
    let card;

    // Generate the card.
    card = cardFactory(chooseCard(turn), CARD_TYPE);

    // Return
    return card;

}

function test(){

    // Initialize
    const TURN = 20;
    const TRIALS = 100;
    const results = {
        "log": 0,
        "pillow": 0,
        "nails": 0,
        "mushroom": 0,
        "sword": 0,
        "energy crystal": 0,
        "crystals": 0
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

function test2(){
    console.log(deckGenerator(10));
}

// test2();

module.exports = {
    deckGenerator
}