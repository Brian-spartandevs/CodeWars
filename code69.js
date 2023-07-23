/* Sum of Multiples

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples

Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID" */

const sumMul = (n, m) => {
  if (m <= 0) {
    return "INVALID";
  }
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
};

console.log(sumMul(2, 8));
console.log(sumMul(4, 30));
console.log(sumMul(2, 65));
console.log(sumMul(5, 67));
console.log(sumMul(9, 1000));
