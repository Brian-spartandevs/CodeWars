/* Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

const stray = (numbers) => {
  let num1 = numbers[0];
  let num2 = numbers[1];
  let num3 = numbers[2];
  if (num1 === num2) {
    for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] !== num1) {
        return numbers[i];
      }
    }
  } else if (num1 === num3) {
    return num2;
  } else {
    return num1;
  }
};

let result1 = stray([1, 1, 2]);
console.log(result1); // 2

let result2 = stray([17, 17, 3, 17, 17, 17, 17]);
console.log(result2); // 3

let result3 = stray([8, 8, 4, 8, 8]);
console.log(result3); // 4