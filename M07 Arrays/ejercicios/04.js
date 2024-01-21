function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var aleatorio = Math.floor(Math.random() * (array.length - 1));
  return array[aleatorio];
}
var arr = [1,232,6,4,5,23];
console.log(obtenerElementoAleatorio(arr));

module.exports = obtenerElementoAleatorio;
