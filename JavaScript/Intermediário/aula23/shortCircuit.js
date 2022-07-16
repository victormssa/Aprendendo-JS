console.log('Victor Manoel' && 0 && 'Teste');
/* Falsy VALUES
false
0
'', "", ``
null / undefined
NaN
*/ 
console.log('Victor' && 'Teste');
console.log('Victor' && '' && 'Teste');

//Dando curto circuito na function
function teste(){
    return 'Hello, World!';
}

const execute = false;
console.log(execute && teste());

/*function teste(){
    return 'Hello, World!';
}

const execute = true;
console.log(execute && teste());*/