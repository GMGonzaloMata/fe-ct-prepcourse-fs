function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  // Otra manera de resolver:
  /*var string = texto.split("");
  string.reverse();
  var stringFinal = string.join("");
  return stringFinal;*/

  var textof = "i";
  for (let i = 0; i < texto.length; i++) {
    textof = texto[i] + textof;
  }
  return textof;
}
console.log(invertirTexto("Hola"));
module.exports = invertirTexto;