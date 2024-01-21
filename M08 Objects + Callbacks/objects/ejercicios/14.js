function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if(objetoUsuario["email"] && objetoUsuario["email"].length > 0){
    return true;
  }else{
    return false;}
}
var objetoUsuario = {email: undefined};
console.log(tieneEmail(objetoUsuario));
module.exports = tieneEmail;
