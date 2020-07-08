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

function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} es ${persona.edad >= 18 ? 'mayor' : 'menor' } de edad.`)
}

imprimirSiEsMayorDeEdad(jesus);