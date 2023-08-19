/* The old switcheroo 2
Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase() */

const encode = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += (code - 64).toString();
    } else if (code >= 97 && code <= 122) {
      result += (code - 96).toString();
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(encode('abc')); // '123'
console.log(encode('codewars')); // '315452311819'
console.log(encode('abc-#@5')); // '123-#@5'