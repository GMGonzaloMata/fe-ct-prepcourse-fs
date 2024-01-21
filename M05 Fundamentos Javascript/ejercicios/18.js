function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if(num % 2 == 1) {
    return true;
  }else {
    return false;
  }
}
console.log(esImpar(5));
module.exports = esImpar;