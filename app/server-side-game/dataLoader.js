// Written by Anthony Muma

const path = require("path"); 
const fs = require("fs");

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

const material = getData('material-cards.json');

module.exports = {
    material
}