/* Eliminar duplicados de la lista
Defina una función que quite duplicados de una matriz de números no negativos y la devuelva como resultado.

El orden de la secuencia tiene que seguir siendo el mismo. */

const distinct = (a) => {
  return [...new Set(a)];
};
