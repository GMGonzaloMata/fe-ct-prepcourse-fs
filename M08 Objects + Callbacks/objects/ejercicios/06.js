const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0;

  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      contador++;
    }
  }

  return contador;
};
var autos = {marcas: ["ford","toyota","ferrari"], colores: ["azul", "rojo"]};
console.log(contarPropiedades(autos));
module.exports = contarPropiedades;
