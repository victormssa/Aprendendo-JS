const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

const data2 = new Date();
console.log(data2.toString());

// Ano, mês, dia, hora, minuto, segundo, milésimo.
const data3 = new Date(2019, 3, 20, 15, 14, 27); 
console.log(data3.toString());

const data4 = new Date('2021-06-30 02:26:00.100');
console.log('Dia', data4.getDate());
console.log('Mês', data4.getMonth() + 1); // Mês começa em 0
console.log('Ano', data4.getFullYear());
console.log('Hora', data4.getHours());
console.log('Min', data4.getMinutes());
console.log('Seg', data4.getSeconds());
console.log('Ms', data4.getMilliseconds());
console.log('Dia Semana', data4.getDay()); // 0 = domingo, 6 = sábado
console.log(data4.toString());

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data5) {
    const dia = zeroAEsquerda(data5.getDate());
    const mes = zeroAEsquerda(data5.getMonth() + 1);
    const ano = zeroAEsquerda(data5.getFullYear());
    const hora = zeroAEsquerda(data5.getHours());
    const min = zeroAEsquerda(data5.getMinutes());
    const seg = zeroAEsquerda(data5.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);