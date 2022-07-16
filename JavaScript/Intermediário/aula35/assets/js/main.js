const elementos = [
    {tag: 'p', texto: 'Texto 1'},
    {tag: 'div', texto: 'Texto 2'},
    {tag: 'footer', texto: 'Texto 3'},
    {tag: 'section', texto: 'Texto 4'},
]

for (let i = 0; i < elementos.length; i++) {
    let elemento = elementos[i];
    let tag = elemento.tag;
    let texto = elemento.texto;
    let elementoHTML = document.createElement(tag);
    elementoHTML.innerHTML = texto;
    document.querySelector('.container').appendChild(elementoHTML); 
}