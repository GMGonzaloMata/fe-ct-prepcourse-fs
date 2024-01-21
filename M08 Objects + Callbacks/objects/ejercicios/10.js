function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  objeto[propiedad] = null;
  return objeto;
}
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(agregarPropiedad(autos,"null"));
module.exports = agregarPropiedad;
