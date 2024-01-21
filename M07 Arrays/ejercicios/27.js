function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(" ");
}
var array = ["Hola", "Mundo"];
console.log(dePalabrasAFrase(array));
module.exports = dePalabrasAFrase;
