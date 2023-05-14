/* 
    /realizar una funcion que reciba un array de strings y debe retornar un objeto
//enumerando las propiedades del 0 a la n donde su valor sea la longitud de cada string
ejemplo: ["Miami", "California"]

*/

const object = (array) => {
  let newObject = {};
  array.forEach((element, index) => {
    newObject[index] = element.length;
  });
  return newObject;
};

console.log(object(["Miami", "California"]));
console.log(object(["Hello", "my", "name", "is"]));
console.log(object(["Javascript", "HTML", "CSS", "React"]));
