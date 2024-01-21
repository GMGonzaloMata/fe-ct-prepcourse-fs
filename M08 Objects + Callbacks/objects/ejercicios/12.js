function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  var num = objetoMisterioso["numeroMisterioso"] * 5;
  return num;
}
var objetoMisterioso = {numeroMisterioso:5
};
console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));
module.exports = multiplicarNumeroDesconocidoPorCinco;
