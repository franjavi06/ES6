//Rest
const mostrarDatos = (...datos) => {
    console.log(datos);
}

//Spread
const arregloDatos = ['Fracisco', 26, 'myail@correo.com', 'RD'];
//pasar cada elemento del arreglo como argumento
mostrarDatos(...arregloDatos);