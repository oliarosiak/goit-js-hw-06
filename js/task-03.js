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

/** Варіант 1 */

const galletyListEl = document.querySelector('.gallery');
galletyListEl.classList.add('gallery-style');
galletyListEl.insertAdjacentHTML('beforebegin', '<h1>Version 1</h1>');

const makeGalleryCard = ({ url, alt }) => { 
  return `
  <li class="gallery-item">
    <img class="gallery-img" src="${url}" alt="${alt}"
  </li>
  `;
};

const galleryImg = images.map(makeGalleryCard).join('');
console.log(galleryImg);

galletyListEl.insertAdjacentHTML('afterbegin', galleryImg);


/** Варіант 2 */

// const ulList = document.querySelector("ul.gallery");
// ulList.classList.add('gallery-style');
// ulList.insertAdjacentHTML('beforebegin', '<h1>Version 2</h1>');

// const galleryMarkup = images.map((image) => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></img></li>`).join("");

// ulList.insertAdjacentHTML("afterbegin", galleryMarkup);