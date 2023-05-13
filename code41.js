/* 
    Find the Integral
    Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the (the second argument), and divide the (the first argument) by that new number.exponentcoefficient

For example for , the integral would be : we added 1 to the exponent, and divided the coefficient by that new number).3x^21x^3

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"

*/

const findIntegral = (coefficient, exponent) => {
  const newExponent = exponent + 1;
  const newCoefficient = coefficient / newExponent;
  return `${newCoefficient}x^${newExponent}`;
};

console.log(findIntegral(3, 2)); // -->  "1x^3"
console.log(findIntegral(12, 5)); // -->  "2x^6"
console.log(findIntegral(20, 1)); // -->  "10x^2"
console.log(findIntegral(40, 3)); // -->  "10x^4"
console.log(findIntegral(90, 2)); // -->  "30x^3"
