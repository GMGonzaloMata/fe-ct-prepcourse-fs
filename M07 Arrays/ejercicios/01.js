function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arr = [];
  for(i = array.length - 1; 0 <= i; i--){
    arr.push(array[i]);
  }
  return arr;
}
var arr = [1,2,3,4,5];
console.log(invertirArray(arr));

module.exports = invertirArray;
