/* How good are you really?
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */

const betterThanAverage = (classPoints, yourPoints) => {
  let sum = classPoints.reduce((a, b) => a + b, 0);
  let avg = sum / classPoints.length;
  return yourPoints > avg;
};

console.log(betterThanAverage([50, 60, 70], 75)); // true
console.log(betterThanAverage([80, 90, 100], 85)); // false
console.log(betterThanAverage([70, 80, 90], 95)); // true