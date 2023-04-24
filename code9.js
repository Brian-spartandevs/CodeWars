/* 
    Abbreviate a Two Word Name 
    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

const abbreviateName = (name) => {
  const [firstName, lastName] = name.split(" ");
  const initials = `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
  return initials;
};


console.log(abbreviateName("Sam Harris")); // Output: "S.H"
console.log(abbreviateName("patrick feeney")); // Output: "P.F"
console.log(abbreviateName("John Doe")); // Output: "J.D"