/* Bob necesita una forma rápida de calcular el volumen de un cuboide con tres valores: el length, width, height y del cuboide. Escribe una función para ayudar a Bob con este cálculo. */

const getVolumeOfCuboid = (length, width, height) => {
  return length * width * height;
};

console.log(getVolumeOfCuboid(3, 5, 7));
