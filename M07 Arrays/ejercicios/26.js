function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}
var array = [1,2,3,4];
console.log(agregarItemAlComienzoDelArray(array,1));

module.exports = agregarItemAlComienzoDelArray;
