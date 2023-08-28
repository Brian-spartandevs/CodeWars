/* Most digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

const findLongest = (array) => {
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (String(array[i]).length > String(longest).length) {
      longest = array[i];
    }
  }
  return longest;
};

console.log(findLongest([1, 10, 100]));
