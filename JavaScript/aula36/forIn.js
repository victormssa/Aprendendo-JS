// For in -> Lê os indices ou chaves do objeto.
//                0        1      2
const frutas = ['Pera', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Manoel',
    idade: 21
};

// Formas de acessar
console.log(pessoa.nome);
console.log(pessoa['nome']);

/*for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};*/
for (let i in pessoa) {
    console.log(i);
};

for (let i in pessoa) {
    console.log(i, pessoa[i])
};

for (let i in pessoa) {
    console.log(i, pessoa.i)
};

for (let i in frutas) {
    console.log(i);
};