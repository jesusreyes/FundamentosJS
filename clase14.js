var jesus = {
    nombre: 'Jesus',
    apellido: 'Reyes',
    edad: 28,
    peso: 110
};

console.log(`Al inicio del año ${jesus.nombre} ${jesus.apellido} pesa ${jesus.peso}kg`)

const INCREMENTO_PESO = .2;
const DECREMENTO_PESO = .3;
const DIAS_DEL_AÑO = 365;
const META = jesus.peso - 10;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= DECREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const haceDeporte = () => Math.random() < 0.4;

var dias = 1;

while(jesus.peso > META) {
    if (comeMucho()){
        aumentarDePeso(jesus);
    } 
    
    if (haceDeporte()) {
        adelgazar(jesus);
    }
    dias += 1
}


console.log(`Pasaron ${dias} días hasta que ${jesus.nombre} ${jesus.apellido} adelgazó 10kg`);