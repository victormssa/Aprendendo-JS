const pontuacao = 999;

/*if (pontuacao >= 1000) {
  console.log("Parabéns, você ganhou um milhão!");
} else {
    console.log("Você não ganhou um milhão!");
}*/

// Ou você pode usar o operador ternário.

const nivelUsuario = pontuacao >= 1000 ? 'Parabéns, você ganhou um milhão!' : 'Você não ganhou um milhão.';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);



