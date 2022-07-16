// Declaração de função (Function hoisting). Ou seja, não faz diferença chamar ela antes ou depois dela ser declarada.
falaOi();
function falaOi() {
 console.log('Oi!');
}

// First-class objects (Objetos de primeira classe)

// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
};
executaFuncao(souUmDado);

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function');
};
arrowFunction();

// Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando!');
    },
    falar2() {
        console.log('Eu estou falando novamente.');
    }
};
obj.falar();
obj.falar2();