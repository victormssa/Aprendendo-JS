// Exemplo de repetição
for (let i = 0; i <= 10; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 300; i <= 400; i += 10) {
    console.log(i);
}

for (let i = 390; i >= 300; i -= 10) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(`${i} é ${par}`);	
}

const frutas = ['abacaxi', 'banana', 'caju', 'damasco', 'uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}