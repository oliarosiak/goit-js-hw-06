/** 
 * Напиши скрипт для создания галереи изображений по массиву данных. 
 * В HTML есть список ul.gallery.
 * Используй массив объектов images для создания элементов <img> вложенных в <li>. 
 * Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
 * 1. Все элементы галереи должны добавляться в DOM за одну операцию вставки.
 * 2. Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
 */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulList = document.querySelector("ul.gallery");

ulList.style.display = "flex";
ulList.style.justifyContent = "center";
ulList.style.width = "100%";
ulList.style.paddingInlineStart = "0px";
ulList.style.listStyleType = "none";
ulList.style.backgroundColor = "pink";

const galleryMarkup = images.map((image) => `<li class="pic"><img src="${image.url}" alt="${image.alt}" height="150px"></img></li>`).join("");

ulList.insertAdjacentHTML("afterbegin", galleryMarkup);