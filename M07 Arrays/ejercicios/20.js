function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var cont = 0;
  for(i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 1){
      continue;
    }
    cont = cont + 1;
  }
  return cont;
}
var array = [1,2,3,4,5,6,7,8];
console.log(contarParesConContinue(array));
module.exports = contarParesConContinue;
