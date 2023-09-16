function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// найти материнский див, кнопки 1 и 2,  и новий див.
const controlBox = document.querySelector('#controls');
const bigBox = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDelete = document.querySelector('[data-destroy]');
console.dir(inputEl);
 
btnCreate.addEventListener('click', createBoxes);
btnDelete.addEventListener('click', destroyBoxes);

let amount = Number(inputEl.value);
console.log(amount);

let boxWidth = 30;
let boxHight = 30;
 
    
function createBoxes() {
  //  event.preventDefault(); ?
  // принять текущий номер из инпута
  // поставить цикл (начать с 0 (или 1?), пока і<=amount,)
for (let i = 1; i <= amount; i += 1) {
  bigBox.insertAdjacentHTML("beforeend",
    "<div style="height: ${boxHight}px ; width: ${boxWidth}px; background-color: ${getRandomHexColor}; border-radius: 50%;"></div>");
      //  через хтмл разметку с размерами 30Х30рх.
  // можно задать бордеррадиус 50% , чтобы были шарики.
  // Размери увеличиваются на 10рх, по сравн.с предыдущим.
 
  boxWidth += 10;
  boxHeight += 10;
}
   }
function destroyBoxes() {
  bigBox.innerHTML = "";
}



  //  2. Очистить коллекцию.
/*по клику на кнопку Очистить
визивается функция
и там иннерХТМЛ удаляет все.
  }
   */
  
  
  
// 1. Створити коллекцию.
/*
по клику на кнопке
запускается функция
и там есть условие пока N-число меньше введенного, 
то створюємо елементик (шарик или кубик)
присваиваем ему колор из рандом-функции
*/ 
