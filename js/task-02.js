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

const elementsItem = ingredients.map(ingredient => {
  const liElement = document.createElement('li');
  liElement.classList.add("item");
  liElement.textContent = `Ingredient name: ${ingredient}`;  
  return liElement;
});

listOfElements.append(...elementsItem);

/** Варіант 2 */

// const ingredientsList = document.querySelector("#ingredients");
// ingredientsList.textContent = 'Вирішено з використанням - createDocumentFragment';
// ingredientsList.style.fontSize = '24px';

// const fragmentsOfElements = document.createDocumentFragment();

// const itemRef = ingredients.forEach(ingredient => {
//   const liTag = document.createElement("li");
//   liTag.textContent = ingredient;
//   liTag.classList.add("item");
   
//   return fragmentsOfElements.append(liTag);
// });

// ingredientsList.append(fragmentsOfElements);



