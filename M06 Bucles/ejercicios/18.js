function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var cont = 1;
  if(a<b){
    for(i = a; i <= b; i++){
      cont = cont * i;
     }
     return cont;
  }
  else if(b<a){
    for(i = b; i <= a; i++){
      cont = cont * i;
    }
    return cont;
  }
}
console.log(productoEntreNúmeros(6,2));
module.exports = productoEntreNúmeros;