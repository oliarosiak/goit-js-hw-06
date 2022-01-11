/**
 * Напиши скрипт, который для каждого элемента массива ingredients:
 * 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
 * 2. Добавит название ингредиента как его текстовое содержимое.
 * 3. Добавит элементу класс item.
 * 4. После чего вставит все <li> за одну операцию в список ul.ingredients
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/** Варіант 1 */

const listOfElements = document.querySelector('#ingredients');

const elementsText = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

listOfElements.append(...elementsText);

/** Варіант 2 */

// const listOfElements = document.querySelector("#ingredients");

// const fragmentsOfElements = document.createDocumentFragment();

// const elementsText = ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   fragmentsOfElements.appendChild(li);
// });

// listOfElements.append(fragmentsOfElements);



