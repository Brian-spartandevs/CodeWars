/* Este kata se trata de multiplicar un número dado por ocho si es un número par y por nueve de lo contrario. */

const simpleMultiplication = (number) => {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
};
