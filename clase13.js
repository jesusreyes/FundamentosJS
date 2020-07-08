var jesus = {
    nombre: 'Jesus',
    apellido: 'Reyes',
    edad: 28,
    peso: 110
};

console.log(`Al inicio del año ${jesus.nombre} ${jesus.apellido} pesa ${jesus.peso}kg`)

const INCREMENTO_PESO = .2;
const DECREMENTO_PESO = .15;
const DIAS_DEL_AÑO = 365;
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= DECREMENTO_PESO;

for(var i = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random();

    if(random < 0.25){
        aumentarDePeso(jesus);
    } else if(random < 0.5) {
        adelgazar(jesus);
    }
}


console.log(`Al final del año ${jesus.nombre} ${jesus.apellido} pesa ${jesus.peso.toFixed(2)}kg`)