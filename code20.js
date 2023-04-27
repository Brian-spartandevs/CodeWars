/* 
    Highest and Lowest
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.


*/

const highestLowest = (str) => {
  const arrayString = str.split(" ");
  let highest = Number(arrayString[0]);
  let lowest = Number(arrayString[0]);
  for (let i = 1; i < arrayString.length; i++) {
    if (Number(arrayString[i]) > highest) {
      highest = Number(arrayString[i]);
    }
    if (Number(arrayString[i]) < lowest) {
      lowest = Number(arrayString[i]);
    }
  }
  return `${highest} ${lowest}`;
};

console.log(highestLowest("1 2 3 4 5")); // return "5 1"
console.log(highestLowest("1 2 -3 4 5")); // return "5 -3"
console.log(highestLowest("1 9 3 4 -5")); // return "9 -5"
