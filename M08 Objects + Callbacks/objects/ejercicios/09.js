function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var objeto = {};
  objeto["nombre"] = nombre;
  objeto["email"] = email;
  objeto["password"] = password;

  return objeto;
}
console.log(nuevoUsuario("Gonza","gonza.mata@gmail.com",123));
module.exports = nuevoUsuario;
