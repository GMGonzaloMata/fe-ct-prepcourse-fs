function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  while (mes > 0 && mes < 12){
    if(mes % 2 == 0 && mes != 2 && mes < 7){
      return "30 días";
    }else if(mes % 2 == 1 && mes < 8){
      return "31 días";
    }else if(mes % 2 == 0 && mes > 7){
      return "31 días";
    }else if(mes % 2 == 1 && mes > 8){
      return "30 días";
    }else if(mes == 2){
      return "29 días";
    }
  }

  return "No existe ese numero de mes";
}

console.log(diasEnMes(8));
module.exports = diasEnMes;
