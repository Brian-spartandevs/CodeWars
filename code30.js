/* 
    Shortest Word
    Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

const findShort = (str) => {
  const words = str.split(" ");
  let shortest = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest;
};

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // Output: 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // Output: 3
console.log(findShort("let's try this one")); // Output: 3