"use strict";

var usuario = {
  nombre: 'Carlos',
  correo: 'correo@correo.com',
  edad: '22',
  pais: 'Mexico',
  profesion: 'Desarrollador'
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion;
console.log(nombre);

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      profesion = _ref.profesion;
  console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);