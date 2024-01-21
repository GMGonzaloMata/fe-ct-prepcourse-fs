function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var valor = objeto.hasOwnProperty(propiedad);
  return valor;
}
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(tienePropiedad(autos,"marcas"));
module.exports = tienePropiedad;
