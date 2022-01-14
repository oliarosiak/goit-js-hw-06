/** Напиши скрипт, который изменяет цвета фона элемента <body> 
 * через инлайн стиль при клике на button.change-color и 
 * выводит значение цвета в span.color.
 * Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const bodyTextColor = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleChangeColorBtn = () => { 
  bodyEl.style.backgroundColor = getRandomHexColor(); 
  const backgroundColor = `${getRandomHexColor()}`;  
  bodyTextColor.textContent = backgroundColor;
};

changeColorBtn.addEventListener('click', handleChangeColorBtn);