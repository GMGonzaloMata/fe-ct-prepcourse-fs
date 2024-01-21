function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var cadena = num.toString();
  if(cadena.length == 3) {
    return true;
  }else { 
    return false;
  }
}
console.log(tieneTresDigitos(235));

module.exports = tieneTresDigitos;
