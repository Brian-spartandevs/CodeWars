/* Capitalización y mutabilidad
Se suponía que su compañero de trabajo debía escribir una función auxiliar simple para poner en mayúscula una cadena (que contiene una sola palabra) antes de irse de vacaciones.

Desafortunadamente, ahora se han ido y el código que te dieron no funciona. Corrija la función auxiliar que escribieron para que funcione según lo previsto (es decir, haga que el primer carácter de la cadena "palabra" esté en mayúsculas).

No se preocupe por los números, caracteres especiales o tipos que no son de cadena que se pasan a la función. Las longitudes de las cadenas serán de 1 carácter a 10 caracteres, pero nunca estarán vacías. */

const capitalizeWord = (word) => {
  return word.replace(word[0], word[0].toUpperCase());
};

console.log(capitalizeWord("word"));
console.log(capitalizeWord("pencil"));
console.log(capitalizeWord("strawberry"));
