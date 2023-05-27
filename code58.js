/* 
    Write Number in Expanded Form
    Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

const expandedForm = (num) => {
  let result = [];
  let numbers = num.toString().split("");
  numbers.forEach((element,index) => {
    if (element !== "0"){
        result.push(element + "0".repeat(numbers.length - index - 1))
    }
  });
  return result.join(" + ")
};

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
