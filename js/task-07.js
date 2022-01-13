/**Напиши скрипт, который реагирует на изменение значения input#font-size-control 
 * (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
 * В результате при перетаскивании ползунка будет меняться размер текста. 
*/

const inputControl = document.querySelector('#font-size-control');
console.log(inputControl);

const textEl = document.querySelector('#text');
console.log(textEl);

textEl.style.fontSize = '24px';
console.log(textEl.style);

const changeTextFontSize = (event) => { 
    
};

//inputControl.addEventListener('input',);