function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let cont = 0;
  for(i = 0;i<=n;i++){
    cont = cont + i;
    if(cont > 100){
      break;
  }
  }
  return cont;

}
console.log(sumarHastaNConBreak(225));
module.exports = sumarHastaNConBreak;