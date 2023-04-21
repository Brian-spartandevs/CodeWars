/* 
    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

const removeChar = (str) => {
  return str.slice(1, -1);
};

console.log(removeChar('eloquent'));
//return loquen
console.log(removeChar('country'));
//return ountr
console.log(removeChar('person'));
//return erso
console.log(removeChar('place'));
//return lac
console.log(removeChar('ooopsss'));
//return oopss