/* 
    Find the missing number

Given a list of consecutive integers in ascending order, find the missing number in the list.

For example:

findMissingNumber([1, 2, 3, 5]) // returns 4

*/

const findMissingNumber = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > 1) {
      return numbers[i] + 1;
    }
  }
};

console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([2, 3, 4, 6])); // 5
console.log(findMissingNumber([1, 2, 3, 4])); // undefined
