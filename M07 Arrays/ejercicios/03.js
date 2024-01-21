function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var Existe = array.includes(elemento);
  if(Existe == false){
    return -1;
  }
  return true;
}
var arr = [1,232,6,4,5,23];
console.log(encontrarElemento(223,arr));
module.exports = encontrarElemento;
