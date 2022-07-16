const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Santos',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}
//const nome = pessoa.nome;
// Atribuição por desestruturação
const { nome: testeNome, sobrenome, idade, sexo = 'Masculino' } = pessoa;

/*const logradouro = pessoa.endereco.logradouro;
const numero = pessoa.endereco.numero;
const bairro = pessoa.endereco.bairro;
const cidade = pessoa.endereco.cidade;
const uf = pessoa.endereco.uf;*/

console.log(pessoa);
const { endereco: { logradouro, numero, bairro, cidade, uf } } = pessoa;
console.log(logradouro, numero, bairro, cidade, uf);
console.log(testeNome, sobrenome, idade, sexo);

const { nome, ...resto } = pessoa2;
console.log(nome, resto);