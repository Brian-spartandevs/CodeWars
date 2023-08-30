/* Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you! */

const validParentheses = (parens) => {
  let stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
    } else if (parens[i] === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(validParentheses("()()()"));
