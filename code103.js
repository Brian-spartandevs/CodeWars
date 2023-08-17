/* TIY-FizzBuzz
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard". */

const tiyFizzBuzz = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === c.toUpperCase() && "AEIOU".includes(c)) {
      result += "Iron Yard";
    } else if (c === c.toUpperCase() && "BCDFGHJKLMNPQRSTVWXYZ".includes(c)) {
      result += "Iron";
    } else if (c === c.toLowerCase() && "aeiou".includes(c)) {
      result += "Yard";
    } else {
      result += c;
    }
  }
  return result;
};

console.log(tiyFizzBuzz("Hello World"));
console.log(tiyFizzBuzz("The Iron Yard"));
