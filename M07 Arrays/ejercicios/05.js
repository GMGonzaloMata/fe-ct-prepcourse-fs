function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
}
}
}
var arr = ["joseee","te","cojeee"];
console.log(obtenerPrimerStringLargo(arr));
module.exports = obtenerPrimerStringLargo;
