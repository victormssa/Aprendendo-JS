/*let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

do {
    console.log(controle);
    controle++;
} while (controle <= 20)*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
let contador1 = null;
let contador2 = null;
const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {
    contador1++;
    rand = random(min,max);
    console.log(`${contador1}# ${rand} - While`);
}

console.log('####################')

do {
    contador2++;
    rand = random(min,max);
    console.log(`${contador2}# ${rand} - Do While`);
} while (rand !== 10);