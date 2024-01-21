function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var cont = 0;
  for(i = 0; i < arrayOfNumbers.length; i++){
    cont = cont + arrayOfNumbers[i];
  }

  cb(cont);
}

module.exports = sumarArray;
