// Escreva uma função que recebe 2 números e retorne o maior deles.
let numX;
let numY;
const random = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const maior = (numX, numY) => {
    numX = random(0, 100);
    numY = random(0, 100);
    if (numX > numY) {
        console.log(`O primeiro número é ${numX} e o segundo número é ${numY}, logo o maior é o primeiro número: ${numX}`);
    } else {
        console.log(`O primeiro número é ${numX} e o segundo número é ${numY}, logo o maior é o segundo número: ${numY}`);
    }
}
maior();