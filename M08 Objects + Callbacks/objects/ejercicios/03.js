const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad].push(valor);
  return objeto;
};
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(agregarNuevaPropiedad(autos,"marcas","bugatti"));
module.exports = agregarNuevaPropiedad;
