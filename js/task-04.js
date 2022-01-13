/**Счетчик состоит из спана и кнопок, которые, при клике, 
 * должны увеличивать и уменьшать его значение на единицу.
 * 
 * 1. Создай переменную counterValue в которой будет храниться 
 * текущее значение счетчика и инициализируй её значением 0.
 * 
 * 2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай 
 * значение счтетчика.
 * 
 * 3.Обновляй интерфейс новым значением переменной counterValue
*/

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
    console.log('Віднімає -1:', counterValue);
});

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
    console.log('Додає +1:', counterValue);
});
