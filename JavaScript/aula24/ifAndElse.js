const hora = 25;

    if (hora <= 12) {
        console.log('Bom dia, Mundo!')
}
    else if (hora >= 13 && hora < 19) {
        console.log('Boa tarde, Mundo!')
}
    else if (hora >= 19 && hora <= 24) {
        console.log('Boa noite, Mundo!')
} else {
    console.log('Este não é um horario para a aplicação');
}