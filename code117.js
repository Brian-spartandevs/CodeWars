/* Billiards triangle
Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5
Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle. */

const pyramid = (balls) => {
  let levels = 0;
  while (balls >= levels + 1) {
    levels++;
    balls -= levels;
  }
  return levels;
};

console.log(pyramid(1)); // 1
console.log(pyramid(3)); // 2
console.log(pyramid(6)); // 3
console.log(pyramid(10)); // 4
console.log(pyramid(15)); // 5