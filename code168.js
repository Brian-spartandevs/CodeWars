/* Sum of Minimums!
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values. */

const sumOfMinimums = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr[i]);
    sum += min;
  }
  return sum;
};

console.log(sumOfMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]])); // 26
console.log(sumOfMinimums([[7, 9], [3, 6], [1]])); // 10
console.log(sumOfMinimums([[8, 0, 3], [0], [1, 1]])); // 1