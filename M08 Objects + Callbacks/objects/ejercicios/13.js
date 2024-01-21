function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(eliminarPropiedad(autos,"marcas"));
module.exports = eliminarPropiedad;
