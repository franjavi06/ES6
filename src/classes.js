class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    mostrarSaludo(saludo){
        return `${saludo} ${this.nombre}`;
    }
    
    mostrarInfo(){
        return `Nombre: ${this.nombre} Edad: ${this.edad}`
    }
}

class Estudiante extends Usuario{
    constructor(nombre, edad, carrera){
        super(nombre, edad);
        this.carrera = carrera;
    }

    mostrarInfo(){
        return `Nombre: ${this.nombre} Edad: ${this.edad} Carrera: ${this.carrera}`;
    }
}

const usuario1 = new Usuario('Francisco', 26);
document.write(usuario1.mostrarSaludo('klk'));
document.write('<br>');
document.write(usuario1.mostrarInfo());

document.write('<hr>');

const estudiante1 = new Estudiante('Francisco', 26, 'Ingeniero');
document.write(estudiante1.mostrarSaludo('klk'));
document.write('<br>');
document.write(estudiante1.mostrarInfo());