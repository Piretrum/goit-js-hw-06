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



    
function createBoxes() {
  let size = 30;
  const arrayEls = [];
  let amount = Number(inputEl.value);
  for (let i = 1; i <= amount; i += 1) {
  
   const littlebox = document.createElement('div');
   littlebox.style.backgroundColor = getRandomHexColor();
   littlebox.style.width = `${size}px`;
   littlebox.style.height = `${size}px`;
  //  littlebox.style.borderRadius = "50%";
   
   arrayEls.push(littlebox);
   size += 10;
  }
  bigBox.append(...arrayEls);
}

 
   
function destroyBoxes() {
  bigBox.innerHTML = "";
  inputEl.value = "";
}
