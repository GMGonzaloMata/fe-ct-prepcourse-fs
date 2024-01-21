function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for(i = 0; i < numeros.length - 1; i++){
    for(j = 0; j < numeros.length - 1; j++){
      if(numeros[i] == numeros[j + 1]){
        return numeros[i];
      }
    }
  }
}
var array = [1,3,4,3,1];
console.log(encontrarElementoRepetido(array));
module.exports = encontrarElementoRepetido;