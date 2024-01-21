function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a,b){
    return a - b;
  });
}
var arr = [1,232,6,4,5,23];
console.log(ordenarArray(arr));
module.exports = ordenarArray;
