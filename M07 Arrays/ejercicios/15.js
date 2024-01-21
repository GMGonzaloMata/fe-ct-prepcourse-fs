function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var cumplenCondicion = array.every( ( ele ) => ele === array[0] );
  return cumplenCondicion;
}
var arr = [1,1,1,1];
console.log(todosIguales(arr));

module.exports = todosIguales;
