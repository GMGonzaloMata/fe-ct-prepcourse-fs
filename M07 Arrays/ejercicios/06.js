function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map( (num) => { return num * 2} );
}
var arr = [1,232,6,4,5,23];
console.log(duplicarElementos(arr));
module.exports = duplicarElementos;
