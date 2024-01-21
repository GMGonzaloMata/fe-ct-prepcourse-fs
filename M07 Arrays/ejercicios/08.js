function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var array2 = [];
  for(i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      array2.push(array[i]);
    }
  }
  return array2;
}
var array = [1,2,3,4,5,6,7,8,9];
console.log(filtrarNumerosPares(array));
module.exports = filtrarNumerosPares;
