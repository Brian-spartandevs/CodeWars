// ¿Qué pasa si necesitamos que la longitud de las palabras separadas por un espacio se agregue al final de esa misma palabra y se devuelva como una matriz?

// Ejemplo (Entrada --> Salida)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Su tarea es escribir una función que tome un String y devuelva un Array/list con la longitud de cada palabra agregada a cada elemento.

// Nota: String tendrá al menos un elemento; las palabras siempre estarán separadas

//primero el string a array
//verificar la longuitud de cada palabra
//anadir la longitud a final de cada palabra
const separateWords = (str) => {
    let array = str.split(" ")
    return array.map((item)=> item + " " + item.length)
};

console.log(separateWords("The Mario Bros Movie"));
console.log(separateWords("Esta es una cadena"));
console.log(separateWords("Alien insolation"));
