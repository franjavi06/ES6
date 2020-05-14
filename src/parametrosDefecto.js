function registrarUsuario(nombre = 'No especificado', correo){
    return `El nombre es ${nombre} y el correo ${correo}`
}

console.log(registrarUsuario(undefined, 'franjavi@correo.com'));