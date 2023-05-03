/* 
    Two to One 
    Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

const longest = (s1, s2) => {
  const combinedString = s1 + s2;
  const uniqueLetters = [...new Set(combinedString)];
  return uniqueLetters.sort().join("");
};

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // "abcdefklmopqwxy"
console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")); // "abcdefghijklmnopqrstuvwxyz"
