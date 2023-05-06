/* 
    Odd-heavy Array
    Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.

*/

//Dividir el array en dos diferentes de numeros de pares y otro de impares
//extraer el numero mayor de la raiz de pares
//contar la cantidad de numeros mayores y menores de numeros extraidos
//si hay mas mayores retorna true si hay mas menores retorna false

const isOddHeavy = (array) => {
  const arrayEven = array.filter((item) => item % 2 === 0);
  const arrayOdd = array.filter((item) => item % 2 !== 0);
  const evenMax = Math.max(...arrayEven);
  let max = 0;
  let min = 0;
  arrayOdd.forEach((element) => (element > evenMax ? max++ : min++));
  return max > min ? true : false;
};

console.log(isOddHeavy([0, 2, 19, 4, 4]));
console.log(isOddHeavy([1, -2, -1, 2]));
