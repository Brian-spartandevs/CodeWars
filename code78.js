/* max diff - easy
DESCRIPTION:
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7 */

const maxDiff = (lst) => {
  if (lst.length <= 1) return 0;
  return Math.max(...lst) - Math.min(...lst);
};

console.log(maxDiff([1, 2, 3, 4])); // 3
console.log(maxDiff([1, 2, 3, -4])); // 7
console.log(maxDiff([15, 22, 13, 6, -21])); // 43
console.log(maxDiff([0, -1, -2])); // 2
