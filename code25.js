/* 
    Isograms

    An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

*/

const isIsogram = (str) => {
  const charArr = str.toLowerCase().split("");
  return charArr.length === new Set(charArr).size;
};

console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("moose")); // Output: false
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("")); // Output: true
console.log(isIsogram("Aa")); // Output: true
console.log(isIsogram("racecar")); // Output: false
