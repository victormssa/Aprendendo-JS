//              0,1,2,3...
const pessoa = {
    nome: 'Victor',
    sobrenome: 'Manoel'
};
const nome = ['Victor', 'Romerio', 'Danilo'];

// For clássico - Geralmente com inteiráveis (array ou strings)
// For in - Retorna o índice ou chave (String, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// Repetição
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
};

// For in
for (let i in nome) {
    console.log(nome[i]);
};
for (let i in pessoa) {
    console.log(pessoa[i]);
};

// For of
for (let valor of nome) {
    console.log(valor);
};
for (let valor of pessoa) {
    console.log(valor);
};

// For each
nome.forEach(function(valor, i, array) {
    console.log(valor, i, array);
});