"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('La operacion tuvo exito');
    } else {
      reject('La operacion no tuvo exito');
    }
  }, 5000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});