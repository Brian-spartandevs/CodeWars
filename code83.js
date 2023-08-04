/* Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length. */

const tripleTrouble = (one, two, three) => {
  let result = [];
  let oneDivided = one.split("");
  let twoDivided = two.split("");
  let threeDivided = three.split("");
  for (let i = 0; i < one.length; i++) {
    result.push(oneDivided[i]);
    result.push(twoDivided[i]);
    result.push(threeDivided[i]);
  }
  return result.join("");
};

console.log(tripleTrouble("aa", "bb", "cc"));
