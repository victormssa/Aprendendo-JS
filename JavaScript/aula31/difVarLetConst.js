const verdadeiro = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = "Victor1";
var nome2 = "Victor2";
const nome3 = "Victor3";

if (verdadeiro) {
    let nome = "João1";
    var nome2 = "João2";
    const nome3 = "João3";
    console.log(nome, nome2, nome3);

    if (verdadeiro){
        let nome = 'Outra coisa1'; // sobrescreve
        var nome2 = 'Outra coisa2';
        const nome3 = 'Outra coisa3';
        console.log(nome, nome2, nome3);
    }
}

console.log(nome, nome2, nome3);