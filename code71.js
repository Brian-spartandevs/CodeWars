/* Find the position!
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

const position = (letter) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let position = alphabet.indexOf(letter) + 1;
  return `Position of alphabet: ${position}`;
};

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));
