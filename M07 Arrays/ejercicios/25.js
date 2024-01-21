function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}
var array = [1,2,3,4];
console.log(agregarItemAlFinalDelArray(array,1));
module.exports = agregarItemAlFinalDelArray;
