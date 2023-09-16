const formEl = document.querySelector('.login-form');
console.dir(formEl);

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    console.dir(form);

    const email = form.elements.email.value;
    console.log(form.elements.email.value);

    const password = form.elements.password.value;
    console.log(form.elements.password.value);

    const userLogin = {};

    if (email.trim() === "" || password.trim() === "") {
        alert("Всі поля мають бути заповнені!");
    } else {
        userLogin.email= email;
        userLogin.password = password;
        form.reset();
    }
    
    console.log(userLogin);
}

