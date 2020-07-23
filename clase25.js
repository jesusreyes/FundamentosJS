

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        if(this.altura >= 1.8){
            console.log('Soy Alto');
        } else {
            console.log('No soy Alto');
        }
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
    }
}

var jesus = new Persona('Jesus', 'Reyes', 1.89);
var erika = new Persona('Erika', 'Luna', 1.69);
var arturo = new Desarrollador('Arturo', 'Martínez', 1.79);

jesus.saludar();
jesus.soyAlto()
erika.saludar();
erika.soyAlto()
arturo.saludar();
arturo.soyAlto()