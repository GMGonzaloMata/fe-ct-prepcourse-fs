function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var array = [];
  var cont = num;
  for(i = 0; i < 10; i++){
    if(cont == i){
      return "Se interrumpió la ejecución";
    }
    array.push(cont);
    cont = cont + 2;
  }
  return array;
}
console.log(breakStatement(0));
module.exports = breakStatement;
