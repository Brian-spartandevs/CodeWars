/* Replace all items
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2] */

const replaceAll = (array, oldItem, newItem) => {
  if (typeof array === "string") {
    return array.split(oldItem).join(newItem);
  } else if (Array.isArray(array)) {
    return array.map(function (item) {
      return item === oldItem ? newItem : item;
    });
  } else {
    throw new Error("Invalid input type");
  }
};

console.log(replaceAll([1, 2, 2], 1, 2)); // [2, 2, 2]
console.log(replaceAll("hello", "l", "L")); // 'heLLo'
