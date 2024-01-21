function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var masNums = 0;
  for(i = 0; i < resultadosTest.length; i++){
    masNums = masNums + resultadosTest[i];
  }

  return masNums / resultadosTest.length;
}
var array = [7,7,8,9];
console.log(promedioResultadosTest(array));
module.exports = promedioResultadosTest;
