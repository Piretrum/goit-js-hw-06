function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onClick);



function onClick(evt) {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  spanEl.textContent = currentColor;

}

/* виклик функції getRandomHexColor потрібно записати в змінну та потім її використовувати для зміни фону
 і текстового значення тегу span. 
 
 У вашому випадку функція викликається два рази, 
 тому колір фону 
 буде відрізнятись 
 від коду кольору в спані.
*/