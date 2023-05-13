/* 
    Caracol
    Clasificación de caracoles
Dada una matriz, devuelva los elementos de matriz dispuestos desde los elementos más externos al elemento medio, viajando en el sentido de las agujas del reloj.n x n

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
Para una mejor comprensión, siga los números de la siguiente matriz consecutivamente:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
Esta imagen ilustrará las cosas más claramente:


NOTA: La idea no es ordenar los elementos del valor más bajo al más alto; La idea es atravesar la matriz 2D en un patrón de caracol en el sentido de las agujas del reloj.

NOTA 2: La 0x0 (matriz vacía) se representa como una matriz vacía dentro de una matriz.[[]]

*/

//primero recorre por completo el primer array
//hacer que se recorra la ultima posicion de todos los array que esten despues del primer array y antes del ultimo array
//recorrer el ultimo array en forma invertida
//subir de nuevo 

const caracol = (array) => {
    let result = []
    array[0].forEach((element)=> result.push(element))
    for (let i = 1; i < array.length - 1; i++) {
        result.push(array[i][array[i].length - 1])
    }
    let finalArray = array[array.length - 1].sort((a,b)=> a - b)
    let result2 = [...result,...finalArray]
    for (let i = 0; i < array[1].length - 1; i++) {
        result2.push(array[1][i])
    }
    return result2
};

console.log(caracol([[1,2,3],[8,9,4],[7,6,5]]))