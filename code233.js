/* Simple Fun #30: Strings Construction
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output
[input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

[input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

[output] an integer */

const stringsConstruction = (A, B) => {
  let count = 0;
  let charsA = A.split("");
  let charsB = B.split("");
  while (true) {
    for (let i = 0; i < charsA.length; i++) {
      let index = charsB.indexOf(charsA[i]);
      if (index !== -1) {
        charsB.splice(index, 1);
      } else {
        return count;
      }
    }
    count++;
  }
};

console.log(stringsConstruction("abc", "abccba"));
console.log(stringsConstruction("abc", "def"));
