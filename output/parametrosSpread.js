"use strict";

//Rest
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; //Spread


var arregloDatos = ['Fracisco', 26, 'myail@correo.com', 'RD']; //pasar cada elemento del arreglo como argumento

mostrarDatos.apply(void 0, arregloDatos);