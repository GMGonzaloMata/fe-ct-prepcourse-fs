function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var array2 = [];
  for(i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      array2.push(array[i]); 
    }
}
  if(!array2.includes("Enero")){
    return "No se encontraron los meses pedidos";
  }else{
    return array2;
  }
}
var arr = ["Marzo", "Enero", "Noviembre"];
console.log(mesesDelAño(arr));

module.exports = mesesDelAño;
