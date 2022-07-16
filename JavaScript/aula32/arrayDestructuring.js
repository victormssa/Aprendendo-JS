//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, , terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, terceiroNumero);
console.log(resto);

const numeros2 = [
//0: 00  01  02
    [10, 20, 30],
//1: 00  01  02
    [40, 50, 60],
//2: 00  01  02
    [70, 80, 90]
]
console.log(numeros2[1][2]);
const[,[ ,ciquenta]] = numeros2;
console.log(ciquenta);