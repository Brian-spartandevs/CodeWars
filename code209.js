/* Sorted? yes? no? how?
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

const isSortedAndHow = (array) => {
  if (array.length <= 1) {
    return "yes, ascending";
  }
  let direction = array[1] - array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (direction === 0) {
      direction = array[i + 1] - array[i];
    } else if ((array[i + 1] - array[i]) * direction < 0) {
      return "no";
    }
  }
  return direction > 0 ? "yes, ascending" : "yes, descending";
};

console.log(isSortedAndHow([1, 2])); // → 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3])); // → 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // → 'no'
