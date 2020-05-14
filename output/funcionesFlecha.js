"use strict";

var nombres = ['Francisco', 'Javier', 'Tejada', 'Lorenzo'];
console.log(nombres);
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres);
/* 
(parametro1, parametro2)=>{
    return
} */