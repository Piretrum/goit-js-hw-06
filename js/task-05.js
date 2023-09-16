const inputEl = document.querySelector('#name-input');
console.dir(inputEl);

const spanEl = document.querySelector('#name-output');
console.log(spanEl.textContent);

inputEl.addEventListener("input", currentName);


function currentName (event) {

    const input = event.currentTarget;

    if (input.value.trim() === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = input.value;
    }
    
}



