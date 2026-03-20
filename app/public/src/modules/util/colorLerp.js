// Color lerp

/**
 * Returns a lerpified color between a starting color and ending color based on a alpha value
 * @param {number} alpha - A number 0 to [alphaLength] 
 * @param {string} startColorHex - The color at 0
 * @param {string} endColorHex - The color at [alphaLength]
 * @param {number} [alphaLength=1] - The length of the alpha (default 1)
 * @returns {number} The interpolated color expressed as a integer
 */
export default function colorLerpHexFromHex(alpha, startColorHex, endColorHex, alphaLength = 1) {

    const startColorObject = Phaser.Display.Color.ValueToColor(startColorHex);
    const endColorObject = Phaser.Display.Color.ValueToColor(endColorHex);

    const interpolatedColorObject = Phaser.Display.Color.Interpolate.ColorWithColor(
        startColorObject,
        endColorObject, 
        alphaLength, 
        Phaser.Math.Clamp(alpha, 0, alphaLength)
    );
    
    return Phaser.Display.Color.GetColor(
        interpolatedColorObject.r,
        interpolatedColorObject.g,
        interpolatedColorObject.b
    );
}