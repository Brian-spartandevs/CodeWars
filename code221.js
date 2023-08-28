/* Reverse a Number
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1 */

const reverseNumber = (num) => {
  let reversed = 0;
  let isNegative = num < 0;
  num = Math.abs(num);
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return isNegative ? -reversed : reversed;
};

console.log(reverseNumber(123));
