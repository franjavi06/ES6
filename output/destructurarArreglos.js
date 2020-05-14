"use strict";

var persona = ['Francisco Tejada', 26, 'Republica Dominicana', 'Desarrollador'];
var nombre = persona[0],
    pais = persona[2],
    _persona$ = persona[3],
    profesion = _persona$ === void 0 ? 'No especificado' : _persona$;
console.log(profesion);