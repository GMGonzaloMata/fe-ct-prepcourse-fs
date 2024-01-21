function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for(i = 0; i < objetoMuchosUsuarios.length; i++){
    objetoMuchosUsuarios[i]["esPremium"] = true;
  }
  return objetoMuchosUsuarios;
}
var objeto = [usuario = {esPremiun: null}, usuario2 = {esPremiun: null}];
console.log(pasarUsuarioAPremium(objeto));
module.exports = pasarUsuarioAPremium;
