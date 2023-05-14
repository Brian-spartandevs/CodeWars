/* 
    // Necesitas escribir una función que invierta las palabras en una cadena dada.
//  Una palabra también puede caber en una cadena vacía. Si esto no es lo suficientemente claro, 
//  aquí hay algunos ejemplos:

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios en 
// blanco innecesarios.

// Ejemplo ( Entrada --> Salida )

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

*/

const reversedWords = (word) => {
    const arrOfString = word.split(" ").reverse()
    return arrOfString.join(' ')
    /* return arrOfString.replace(','," ") */
}

console.log(reversedWords("Mario Bros."))
console.log(reversedWords("Hi There."))
console.log(reversedWords("Hello World"))