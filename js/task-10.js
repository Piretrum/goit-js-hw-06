function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controlBox = document.querySelector('#controls');
const bigBox = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDelete = document.querySelector('[data-destroy]');

 
btnCreate.addEventListener('click', createBoxes);
btnDelete.addEventListener('click', destroyBoxes);

let amount = Number(inputEl.value);
let size = 30;
 
    
function createBoxes() {
  for (let i = 1; i <= amount; i += 1) {
   const arrayEls = [];
   const littlebox = document.createElement('div');
    
   littlebox.style.backgroundColor = getRandomHexColor();
   littlebox.style.width = size;
   littlebox.style.height = size;
   arrayEls.push(littlebox);
    
   size += 10;
  }
}
bigBox.append(...arrayEls);
   


   
function destroyBoxes() {
  bigBox.innerHTML = "";
}




// const markup = () => {
//   for (let i = 1; i <= amount; i += 1) {

//   }
//   <div style="height: ${size}px ; width: ${size}px; background-color: ${getRandomHexColor}; border-radius: 50%;"></div>
// }






// bigBox.insertAdjacentHTML("beforeend",
//     `<div style="height: ${size}px ; width: ${size}px; background-color: ${getRandomHexColor}; border-radius: 50%;"></div>`);