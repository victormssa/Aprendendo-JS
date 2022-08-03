// Argumento que sustenta todos os argumentos enviados, sem ser em Arrow Function
function funcao2(a, b, c, d, e, f, g, h) {
    console.log(a, b, c, d, e, f, g, h);
}
funcao2(1, 2, 3, 4, 5, 6, 7);

function funcao3(a, b = 2, c) {
    console.log(a + b + c);
}
funcao3(3, undefined, 20);