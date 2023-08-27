/* Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer. */

const largestPairSum = (numbers) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > firstMax) {
      secondMax = firstMax;
      firstMax = numbers[i];
    } else if (numbers[i] > secondMax) {
      secondMax = numbers[i];
    }
  }
  return firstMax + secondMax;
};

console.log(largestPairSum([10, 14, 2, 23, 19])); // → 42
console.log(largestPairSum([99, 2, 2, 23, 19])); // → 122
