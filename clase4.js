var nombre = 'Heriberto', edad = 27;

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad);
imprimirEdad('Vicky', 27);
imprimirEdad('Erick', 33);
imprimirEdad('Carlos', 22);

//Toda variable que no se defina dentro de una función
//estará definida dentro del alcance global
function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);