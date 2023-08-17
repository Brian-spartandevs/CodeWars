/* Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

const maps = (array) => {
  let doubledArray = array.map((x) => x * 2);
  return doubledArray;
};

console.log(doubleArray([1, 2, 3])); // [2, 4, 6]
console.log(doubleArray([4, 5, 6])); // [8, 10, 12]
