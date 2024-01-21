function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let cont = 0;
  let num1 = num;
  do {
    num1 = num1 + 5;
    cont = cont + 1;
  } while (cont <  8);
  return num1;
}
console.log(doWhile(1));
module.exports = doWhile;