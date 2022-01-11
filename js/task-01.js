/**
 * 1. Посчитает и выведет в консоль количество категорий в ul#categories, 
 * то есть элементов li.item
*/

const allCategories = document.querySelectorAll('li.item');
const numberOfAllCategories = allCategories.length;

console.log('Number of categories:', numberOfAllCategories);


/**
 * 2. Для каждого элемента li.item в списке ul#categories, 
 * найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
 * и количество элементов в категории (всех вложенных в него <li>)
*/

allCategories.forEach(element => {
    const categoryName = element.firstElementChild.textContent;

    console.log('Category:', categoryName);
    
    const listOfElements = element.lastElementChild.querySelectorAll('li');   
    const numberOfElements = listOfElements.length;

    console.log('Elements:', numberOfElements);    
})

