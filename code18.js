/* 
    Max sum between two negatives
    Task

You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell, None for Rust.
Example

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^

Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

*/

const maxSumBetweenTwoNegatives = (arr) => {
  let maxSum = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      let sum = 0;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < 0) {
          if (sum > maxSum) {
            maxSum = sum;
          }
          break;
        } else {
          sum += arr[j];
        }
      }
    }
  }

  return maxSum > -1 ? maxSum : m;
};

console.log(maxSumBetweenTwoNegatives([4, -1, 6, -2, 3, 5, -7, 7]));
