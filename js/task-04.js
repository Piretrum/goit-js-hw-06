/*
1. знайти елемени, витянуть в джиєс. (Кнопки отдельно каждую  и спан)



*/
const counter = document.querySelector('#counter');
console.dir(counter);

const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
console.dir(valueEl);

let counterValue = 0;


btnDec.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
} )
btnInc.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent= counterValue;
} )