function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["password"] = nuevaPassword;
  return objetoUsuario;
}
var objetoUsuario = {password: "ansdjka"};
console.log(actualizarPassword(objetoUsuario,"hol"));

module.exports = actualizarPassword;
