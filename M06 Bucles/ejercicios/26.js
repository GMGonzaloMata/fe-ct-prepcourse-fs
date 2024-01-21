function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var str = "";
  for(i = 0; i < str1.length; i++){
    for(j = 0; j < str2.length; j++){
      if(str1[i] == str2[j]){
        str += str1[i];
      }
    }
  }
  if(str.length == str1.length && str.length == str2.length){
    return true;
  }else{
    return false;
  }
}
console.log(esAnagrama("amor","orma"));
module.exports = esAnagrama;
