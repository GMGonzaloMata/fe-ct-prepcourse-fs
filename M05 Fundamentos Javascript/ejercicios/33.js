function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    if (numero <= 1) {
      // Los números menores o iguales a 1 no son primos
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Itera desde 2 hasta la raíz cuadrada del número
      if (numero % i === 0) {
        // Si el número es divisible por algún número entre 2 y la raíz cuadrada, no es primo
        return false;
      }
    }
  
    // Si no se encontró ningún divisor entre 2 y la raíz cuadrada, el número es primo
    return true;
  }


console.log(esNumeroPrimo(4));
module.exports = esNumeroPrimo;
