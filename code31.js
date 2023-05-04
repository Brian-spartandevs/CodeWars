/* 
    String ends with?
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

const endsWith = (str, ending) => {
  return str.endsWith(ending);
};

console.log(endsWith("abc", "bc")); // true
console.log(endsWith("abc", "d")); // false
console.log(endsWith("hello", "lo")); // true
console.log(endsWith("hell", "hello")); // false