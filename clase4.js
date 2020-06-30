var nombre = 'Heriberto', edad = 27;

/* function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad);
imprimirEdad('Vicky', 27);
imprimirEdad('Erick', 33);
imprimirEdad('Carlos', 22); */

var jesus = {
    nombre: 'Jesus',
    apellido: 'Reyes',
    edad: 37
}
var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona) {
    var {nombre, edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

function cumpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
console.log(jesus);
cumpleaños(jesus);
console.log(jesus);


/* imprimirNombreYEdad(jesus);
imprimirNombreYEdad(dario); */