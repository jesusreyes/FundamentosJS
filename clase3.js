var edad = 37;

//edad = edad + 1;
edad += 1;

var peso = 100;
//peso = peso - 2;
peso -= 2;

var sandwich = 1;

peso = peso + sandwich;

var jugarAlFutbol = 3;

peso -= jugarAlFutbol;

var precioDeVino =  200.3;


var total1 = precioDeVino * 3
//Nos de vuelve 600.9000000000001
//Para arreglarlo a 2 decimales usamos .toFixed(2)
total1 = total1.toFixed(2);
//El problema es que toFixed(2) nos devuelve un string
//Si queremos que sea flotante lo parseamos a Float
var total2 = parseFloat(total1);

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
