function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var cont = 1;
  if (arguments.length === 0){ 
    return 0;
  }else if(arguments.length === 1){
    return arguments[0];
  }else{
    for(i = 0; i<arguments.length; i++){
      cont = cont * arguments[i];
    }
    return cont;
  }
}
var array = [1,2,3,4,5];
console.log(multiplicarArgumentos(1,2,3,4,5));
module.exports = multiplicarArgumentos;
