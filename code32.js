/* 
    Find your caterer
    You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

Number of orders is always equal to number of people.

For example,


budget, people => (200, 9) will return 2.

budget, people => (300, 9) will return 3 and so on.

*/

const findCaterer = (budget, people) => {
  if (people === 0 || budget < 15 * people) {
          return -1;
      }
      let cost;
      if (people > 60) {
          cost = 30 * 0.8 * people;
      } else {
          cost = 30 * people;
      }
      if (budget >= cost) {
          return 3;
      }
      if (budget >= 20 * people) {
          return 2;
      }
      return 1;
  }

console.log(findCaterer(30, 1));
console.log(findCaterer(500, 30));
console.log(findCaterer(30, 0));
console.log(findCaterer(1500, 61));