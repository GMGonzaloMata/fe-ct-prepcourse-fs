function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var masNums = 0;
  for(i = 0; i < arrayOfNums.length; i++){
    masNums = masNums + arrayOfNums[i];
  }

  return masNums;
}
var array = [1,2,3,4,5,6];
console.log(agregarNumeros(array));

module.exports = agregarNumeros;
