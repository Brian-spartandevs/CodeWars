/* 
    Invertir un número en cualquier base
DESCRIPCIÓN: Tarea Escribe una función que cuando se le da un entero no negativo n y una base arbitraria b, devuelve el número invertido en esa base.
Ejemplos n=12 y b=2 devuelve 3, porque 12 en binario es “1100”, que se invierte a “0011”, equivalente a 3 en decimal. n=10 y b=5 devuelve 2, porque 10 en base-5 es “20”, que se invierte a “02”, equivalente a 2 en decimal. n=45 y b=30 devuelve 451, porque 45 en base-30 es “1F”, que se invierte a “F1”, equivalente a 451 en decimal. n=3 y b=4 devuelve 3, porque 3 en base-4 es “3”, que se invierte a “3”, equivalente a 3 en decimal. n=5 y b=1 devuelve 5, porque 5 en unario es “|||||”, que se invierte a “|||||”, equivalente a 5 en decimal. Nota La función debe devolver un número entero. La base b será mayor o igual a 1. Caso de arista: Base-1 también se usa en este kata para representar el sistema de numeración unaria. Piense en ello como un sistema de marcas de conteo. Por ejemplo: 3 (decimal) -> ||| (unario) 5 (decimal) -> ||||| (unario)

*/

const reverseNumber = (n, b) => {
  if (n >= 1 && b >= 2) {
    let binary = n.toString(b);
    const binary2 = binary.split("").reverse().join("");
    return parseInt(binary2, b);
  } else if (b === 1) {
    return n
  }
};

console.log(reverseNumber(12, 2));
console.log(reverseNumber(10, 5));
console.log(reverseNumber(45, 30));
console.log(reverseNumber(3, 4));
console.log(reverseNumber(5, 1));