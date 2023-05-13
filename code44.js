/* 
    Convert number to reversed array of digits
    Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

const reverseNumberToArray = (num) => {
  return num.toString().split("").reverse().map(Number);
};

console.log(reverseNumberToArray(35231)); // [1, 3, 2, 5, 3]
console.log(reverseNumberToArray(0)); // [0]
console.log(reverseNumberToArray(12345)); // [5, 4, 3, 2, 1]
console.log(reverseNumberToArray(987654321)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
