function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cont = 0;
  for(i = 0; i < array.length; i++){
    if(array[i] > 10){
      cont = cont + 1;
    }
  }
  return cont;
}
var array = [1,23,1,234,12,145,12];
console.log(contarElementosMayoresA10(array));
module.exports = contarElementosMayoresA10;
