/* Remove duplicate words
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta' */

const removeDuplicateWords = (s) => {
  let words = s.split(" ");
  let uniqueWords = [];
  for (let i = 0; i < words.length; i++) {
    if (!uniqueWords.includes(words[i])) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.join(" ");
};

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // → 'alpha beta gamma delta'
