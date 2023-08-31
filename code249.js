/* Squares sequence
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81] */

const squares = (x, n) => {
  let result = [];
  if (n <= 0) {
    return result;
  }
  result.push(x);
  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] * result[i - 1]);
  }
  return result;
};

console.log(squares(2, 5));
console.log(squares(10, 4));
