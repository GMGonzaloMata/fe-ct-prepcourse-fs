function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const edad = 2024 - fechaNacimiento.getFullYear();
  if(edad >= 18){
    return true;
  }else {
    return false;
  }
}
const edad = new Date("2003-03-19");
console.log(esMayorDeEdad(edad));

module.exports = esMayorDeEdad;