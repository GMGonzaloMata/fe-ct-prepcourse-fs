// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {Nombre: "Susana", Edad: 28, Curriculum: {Profesiones: 
    ["Maestra", "Directora"]} ,
saludar: function(){
    console.log("Mi nombre es " + this.Nombre)
}};
objetoAnidado.saludar();
module.exports = objetoAnidado;
