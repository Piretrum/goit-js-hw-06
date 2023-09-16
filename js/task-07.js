const slider = document.querySelector('#font-size-control');
console.dir(slider);

const text = document.querySelector('#text');
console.dir(text);



console.log(slider.value); 

function resize(event) {

    const  slider = event.currentTarget;
    console.dir(event.currentTarget)

    text.style.fontSize = `${slider.value}px`;
}


slider.addEventListener('input', resize)
