function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indice = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[indice]) {
      indice = i;
    }
  }
  return indice;

}
var array = [911,1,3,5,1,6000];
console.log(encontrarIndiceMayor(array));
module.exports = encontrarIndiceMayor;
