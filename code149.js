/* Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

const otherAngle = (angle1, angle2) => {
  return 180 - angle1 - angle2;
};

console.log(otherAngle(60, 70)); // 50
