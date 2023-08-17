/* Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input. */

const removeConsecutiveDuplicates = (s) => {
  let words = s.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[i + 1]) {
      result.push(words[i]);
    }
  }
  return result.join(" ");
};

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));

console.log(removeConsecutiveDuplicates("one two two three three three four four four four five six six"));
