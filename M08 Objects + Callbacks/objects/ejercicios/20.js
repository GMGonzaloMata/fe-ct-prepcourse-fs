function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var cont = 0;
  for(i = 0; i < objetoUsuario.posts.length; i++){
    cont = cont + objetoUsuario.posts[i]["likes"];
  }
  return cont;
}
var objetoUsuario = {posts: [post = {likes: 1}, post2 = {likes: 5}, post3 = {likes: 6},]};
console.log(sumarLikesDeUsuario(objetoUsuario));
module.exports = sumarLikesDeUsuario;
