/* Dropcaps
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space 
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output. */

function dropCaps(str) {
  let words = str.split(" ");
  let result = "";
  for (let word of words) {
    if (word.length > 2) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    result += word + " ";
  }
  return result.trim();
}

console.log(dropCaps("apple"));
console.log(dropCaps("apple of banana"));
console.log(dropCaps("   space WALK   "));
console.log(dropCaps("one   space"));
