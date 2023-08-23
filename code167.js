/* Largest 5 digit number in a series
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. */

const solution = (digits) => {
  let max = 0;
  for (let i = 0; i < digits.length - 4; i++) {
    let num = parseInt(digits.substr(i, 5));
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(solution("283910")); // 83910
console.log(solution("1234567890")); // 67890
console.log(solution("9876543210")); // 98765