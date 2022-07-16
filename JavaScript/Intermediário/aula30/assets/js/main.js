const data = new Date();
const diaSemana = data.getDay();
const mesSet = data.getMonth(); 

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    
    
    let mesTexto = mes;
    switch (mesSet) {
    case 1:
        mesTexto = 'Janeiro';
        break;
    case 2:
        mesTexto = 'Fevereiro';
        break;
    case 3:
        mesTexto = 'Março';
        break;
    case 4:
        mesTexto = 'Abril';
        break;
    case 5:
        mesTexto = 'Maio';
        break;
    case 6:
        mesTexto = 'Junho';
        break;
    case 7:
        mesTexto = 'Julho';
        break;
    case 8:
        mesTexto = 'Agosto';
        break;
    case 9:
        mesTexto = 'Setembro';
        break;
    case 10:
        mesTexto = 'Outubro';
        break;
    case 11:
        mesTexto = 'Novembro';
        break;
    case 12:
        mesTexto = 'Dezembro';
        break;
    default:
        mesTexto = 'Mês inválido';
        break;
    }

    let diaSemanaTexto;
    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Dia inválido';
        break;
    }

    return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${min}`;
}

const dataFinal = formataData(data);
const dataHTML = document.querySelector("#data");
dataHTML.innerHTML = dataFinal;

