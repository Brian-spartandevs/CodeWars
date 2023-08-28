/* Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */

const divCon = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result += arr[i];
    } else {
      result -= parseInt(arr[i]);
    }
  }
  return result;
};

console.log(divCon([1, "2", 3, "4"]));
