const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);

let textLength = Number(inputEl.dataset.length) 
// console.log(textLength);
// console.log(inputEl.value.length);


function checkInput(event) {
    // console.log(event.currentTarget);

    const inputValidator = event.currentTarget;

    if (inputValidator.value.length === textLength) {
        inputValidator.classList.add('valid');
        inputValidator.classList.remove('invalid');
        return;
    } else {
        inputValidator.classList.add('invalid');
        inputValidator.classList.remove('valid');
    }
 
}

// console.log(inputEl.value.length);

inputEl.addEventListener("blur", checkInput);
