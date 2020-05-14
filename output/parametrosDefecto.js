"use strict";

function registrarUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No especificado';
  var correo = arguments.length > 1 ? arguments[1] : undefined;
  return "El nombre es ".concat(nombre, " y el correo ").concat(correo);
}

console.log(registrarUsuario(undefined, 'franjavi@correo.com'));