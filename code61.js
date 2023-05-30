/* 
    Regex valida el código PIN
Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los códigos PIN no pueden contener nada más que exactamente 4 dígitos o exactamente 6 dígitos.

Si a la función se le pasa una cadena de PIN válida, devuelve true, de lo contrario devuelve false.

Ejemplos (entrada --> salida)
"1234" --> verdadero
"12345" --> falso
"A234" --> falso
*/

const validatePIN = (pin) => {
    const regex = /^(\d{4}|\d{6})$/
    return regex.test(pin)
};

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("A234"));
