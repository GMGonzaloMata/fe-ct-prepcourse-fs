function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var newArray = [];
  for(i = 0; i < arrayOfStrings.length; i++){
    let string = arrayOfStrings[i].split("");
    if(string[0] === "a"){
      string.join("");
      newArray.push(string);
    }
  }
  return newArray;
}
module.exports = filter;
