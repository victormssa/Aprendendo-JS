function saudação(nome) {
    return `Olá, ${nome}!`;
};

const variavel = saudação('Victor');
console.log(variavel);

function soma(x,y) {
 const resultado = x + y;
 return resultado;
};

console.log(soma(5, 8));

//Arrow function
const raiz = n => n ** 0.5;

console.log(raiz(9));


