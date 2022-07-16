/*
Primitivos (Imutáveis) - String, Boolean, Undefined, Null (bigint, symbol) - Valor.
*/
//          0123
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia.
console.log(a, b);

a = 'Outra coisa';
console.log('Outra coisa');

/*
Referência (Mutável) - Array, Object, Function - Passados por referência.
*/
let c = [1, 2, 3];
let d = c;
let e = d;
let f = [...c];
console.log(c, d);

c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);

c.push('Luiz');
console.log(c, d, e);

console.log(f);

// Exemplo com objeto.
const g = {
    nome: 'Victor',
    sobrenome: 'Manoel'
};

const h = g;
g.nome = 'Tufão';

console.log(h);
