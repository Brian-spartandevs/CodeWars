/* Get Planet Name By ID
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth" */

const getPlanetName = (id) => {
  let planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  return planets[id - 1];
};

console.log(getPlanetName(3)); // Earth
