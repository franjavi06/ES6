let usuario = {
    nombre: 'Carlos',
    correo: 'correo@correo.com',
    edad: '22',
    pais: 'Mexico',
    profesion: 'Desarrollador'
}

const {nombre, correo, profesion = 'No especificado'} = usuario;

console.log(nombre);

const mostrarInfo = ( {nombre, profesion} ) => {
    console.log(`${nombre} es ${profesion}`);
}

mostrarInfo(usuario);