/* Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  " */

const doubleChar = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
};

console.log(doubleChar("String")); // "SSttrriinngg"
console.log(doubleChar("Hello World")); // "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // "11223344!!__  "
