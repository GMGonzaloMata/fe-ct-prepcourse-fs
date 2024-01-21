function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["amigos"].push(nuevoAmigo);
  return objetoUsuario;
}
var objeto = {amigos: ["amigo"]};
console.log(agregarAmigo(objeto, "nuevo amigo"));
module.exports = agregarAmigo;
