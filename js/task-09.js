function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color')
const textEl = document.querySelector('.color')
const bodiEl = document.querySelector('body')



btnEl.addEventListener('click', onClick)

function onClick(evt) {
  bodiEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();

}

/*

3. будет менять цвет фона боди по клику. 
  3а. Взять значение фона из функции рандом.
  3б. Функцию рандом сделать наверное колбеком.
*/