/* 
    Reversed Strings
    Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("world")); // "dlrow"
console.log(reverseString("word")); // "drow"
