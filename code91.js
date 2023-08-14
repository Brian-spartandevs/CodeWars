/* Printing Array elements with Comma delimiters
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a" */

const printArray = (arr) => {
  return arr.join(",");
};

console.log(printArray(["h", "o", "l", "a"]));
console.log(printArray([1, 2, 3, 4]));
console.log(printArray(["apple", "banana", "cherry"]));
