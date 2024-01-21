function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
}
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(actualizarValorPropiedad(autos,"marcas",["porsche","renault"]));
module.exports = actualizarValorPropiedad;
