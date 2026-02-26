// Written by Anthony Muma
// Modified Feb 25, 2026

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

const path = require("path"); 
const fs = require("fs");

/* -------------------------------------------------------------------------- */
/*                                 Data Loader                                */
/* -------------------------------------------------------------------------- */

/**
 * 
 * @param {string} filename 
 * @returns 
 */
function getData(filename) {
    const file = filename; 
    const jsonPath = path.join(__dirname, '../data', file); 
    const jsonData = fs.readFileSync(jsonPath, 'utf8');
    const jsonParsed = JSON.parse(jsonData);
    return jsonParsed;
} 

/* -------------------------------------------------------------------------- */
/*                               Data Available                               */
/* -------------------------------------------------------------------------- */

const material = getData('material-cards.json');

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */

module.exports = {
    material
}