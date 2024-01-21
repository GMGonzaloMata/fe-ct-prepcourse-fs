function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var textof = "";

  for (let i = 0; i < string.length; i++) {
    textof = string[i] + textof;
  }

  if(textof == string){
    return true;
  }else{
    return false;
  }
}
console.log(esPalindromo("aerea"));
module.exports = esPalindromo;
