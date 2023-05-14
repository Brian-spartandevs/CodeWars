/* 
    Realizar una funcion que reciba un array como parametro, debes retornar el elemento sin elementos repetidos
*/

const nonRepeatElements = (arr) => {
    const newArr = new Set(arr)
    let result = [...newArr]
    return result
}

console.log(nonRepeatElements([2,4,5,5,1,2,20,40]))
console.log(nonRepeatElements([2,8,1,8,2,50]))
console.log(nonRepeatElements([7,8,3,8,3,7]))
console.log(nonRepeatElements([3,7,9,9,0,0]))