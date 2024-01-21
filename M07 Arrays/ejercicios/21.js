function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for(i = 0; i < secuencia.length; i++){
    if(n % secuencia[i] === 0){
      return secuencia[i];
    }
  }
}
var secuencia = [3,4,5,6,7,10];
console.log(encontrarPrimerMultiploDeN(8,secuencia));

module.exports = encontrarPrimerMultiploDeN;