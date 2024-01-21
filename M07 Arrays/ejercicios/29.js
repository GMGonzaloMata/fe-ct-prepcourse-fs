function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length < 1){
    return null;
  }

  for (i=numeros[0]; i < numeros[numeros.length - 1]; i++){
    if(!numeros.includes(i)){
      return i;
    }
  }

  return null;
}
var array = [1,3];
console.log(encontrarNumeroFaltante(array));
module.exports = encontrarNumeroFaltante;