/* The Most Amicable of Numbers
Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)

For example, the smallest pair of amicable numbers is (220, 284); for the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, of which the sum is 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, of which the sum is 220.

Derive function amicableNumbers(num1, num2) which returns true/True if pair num1 num2 are amicable, false/False if not. */

const amicableNumbers = (num1, num2) => {
  function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== 1 && i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum;
  }
  return sumOfDivisors(num1) === num2 && sumOfDivisors(num2) === num1;
};

console.log(amicableNumbers(220, 284)); // true
console.log(amicableNumbers(1184, 1210)); // true
console.log(amicableNumbers(220, 280)); // false
