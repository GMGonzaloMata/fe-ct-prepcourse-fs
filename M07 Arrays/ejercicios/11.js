function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var array2 = [];
  for(i=0; i < array.length; i++){
    array2.push(array[i] * i);
  }
  return array2;
}
var array = [2,2,2,2,2,2];
console.log(multiplicarElementosPorIndice(array));

module.exports = multiplicarElementosPorIndice;
