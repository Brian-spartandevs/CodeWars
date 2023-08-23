/* Color to Grayscale
Grayscale colors in RGB color model are colors that have the same values for Red, Green and Blue. For example, #606060 is a grayscale color, while #FF0055 is not.

In order to correctly convert a color to grayscale, one has to use luminance Y for Red, Green and Blue components. One can calculate luminance Y through the formula introduced in the NTSC standard:

Y = 0.299 * R + 0.587 * G + 0.114 * B
This formula closely represents the average person's relative perception of the brightness of red, green, and blue light.

Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case.

Round the value of luminance Y to the closest integer.

All inputs will be Valid. */

const rgbToGrayscale = (color) => {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);
  let y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  let hexY = y.toString(16).padStart(2, "0");
  return `#${hexY}${hexY}${hexY}`;
};

console.log(rgbToGrayscale("#FF0000")); // "#4C4C4C"
console.log(rgbToGrayscale("#00FF00")); // "#969696"
console.log(rgbToGrayscale("#0000FF")); // "#1C1C1C"
