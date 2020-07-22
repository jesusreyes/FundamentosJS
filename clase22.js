function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    if(this.altura >= 1.8){
        console.log('Soy Alto');
    } else {
        console.log('No soy Alto');
    }
}

function Desarrollador(nombre, apellido) {
    this.nombre,
    this.apellido
}

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
}

heredaDe(Desarrollador, Persona);


var jesus = new Persona('Jesus', 'Reyes', 1.89);
var erika = new Persona('Erika', 'Luna', 1.69);
var arturo = new Persona('Arturo', 'Martínez', 1.79);

jesus.saludar();
jesus.soyAlto()
erika.saludar();
erika.soyAlto()
arturo.saludar();
arturo.soyAlto()