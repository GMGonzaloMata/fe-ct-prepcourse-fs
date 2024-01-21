function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var string = array.join("").toUpperCase().split("");
  return string;
}
var array = ["h","o","l","a"];
console.log(convertirStringAMayusculas(array));
module.exports = convertirStringAMayusculas;
