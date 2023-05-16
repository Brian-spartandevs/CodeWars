/* 
    Most Likely
    Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

*/

const mostLikely = (prob1, prob2) => {
  let newProb1 = prob1.split(":");
  let newProb2 = prob2.split(":");
  return Number(newProb1[0] / newProb1[1]) > Number(newProb2[0] / newProb2[1]);
};

console.log(mostLikely("1:3", "1:2"));
