var jesus = {
    nombre: 'Jesus',
    apellido: 'Reyes',
    edad: 28,
    ingeniero: true,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
};

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero === true){
        console.log('Ingeniero');
    } else {
        console.log('No es Ingeniero');
    }

    if(persona.cantante === true){
        console.log('Cantante');
    }
    if(persona.dj === true){
        console.log('Dj');
    }
    if(persona.drone === true){
        console.log('Vuela drones');
    }

}

imprimirProfesiones(jesus);

//Mejoramos la legibilidad del codigo dividiendo en funciones y utilizando  constantes
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`)
    } else {
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

imprimirSiEsMayorDeEdad(jesus);