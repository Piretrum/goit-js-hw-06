const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
// console.dir(ulEl);

 
const itemsEl = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  console.log(liEl);
  return liEl;
});

console.log(itemsEl);

ulEl.append(...itemsEl);























// можна через
// insertAdjacentHTML.
// Ще можна звернутись до кожного li, який ти створюэш в циклі і використати
// outerHTML.
// Або звичайний append поза циклом


