/* 
    Length and two values.
    Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

*/

const alternate = (n, firstValue, secondValue) => {
  if (n === 0) {
    return [];
  } else if (n > 0) {
    let result = [];
    const newN = Math.ceil(n / 2);
    for (let i = 0; i < newN; i++) {
      result.push(firstValue);
      result.push(secondValue);
    }
    return result.slice(0, n);
  }
};
