/* Volume of a cup
Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Exmples:

cupVolume(1, 1, 1);
//returns 0.79

cupVolume(10, 8, 10);
//returns 638.79

cupVolume(1000, 1000, 1000);
//returns 785398163.4

cupVolume(13.123, 123.12, 1);
//returns 4436.57

cupVolume(5, 12, 31);
//returns 1858.51
You will only be passed positive numbers. */

const cupVolume = (d1, d2, height) => {
  let r1 = d1 / 2;
  let r2 = d2 / 2;
  let volume = ((Math.PI * height) / 3) * (r1 * r1 + r1 * r2 + r2 * r2);
  return Number(volume.toFixed(2));
};

console.log(cupVolume(1, 1, 1));
//returns 0.79

console.log(cupVolume(10, 8, 10));
//returns 638.79

console.log(cupVolume(1000, 1000, 1000));
//returns 785398163.4

console.log(cupVolume(13.123, 123.12, 1));
//returns 4436.57

console.log(cupVolume(5, 12, 31));
//returns 1858.51
