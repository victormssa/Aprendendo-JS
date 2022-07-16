// Sentido: 0,1,2,3 =>
const alunos = ['Victor','Bruno','Ivan','Noah'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
alunos[0] = 'Tufão';
alunos[4] = 'Gustavo';
alunos.push('O Cara');
alunos.unshift('Felipe');
alunos.unshift('Pedro');
console.log(alunos);
alunos.shift();
console.log(alunos);
console.log(alunos.slice(0, 3));

const array = [1,2,3];
console.log(array);
array.push(4);
array[0] = 'Luiz';
console.log(array);