document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('signin');
    const registerForm = document.getElementById('signup');
    const linkRegister = document.getElementById('linkRegisterForm');
    const linkLogin = document.getElementById('linkLoginForm');

    linkLogin.addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form--hidden');
        registerForm.classList.add('form--hidden');
    })

    linkRegister.addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('form--hidden');
        registerForm.classList.remove('form--hidden');
    })

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const button = document.getElementById('loginBtn');

    let user1 = 'Marco12';
    let password1 = '1234';

    button.addEventListener('click', () => {
        if (username.value === user1 && password.value === password1) {
            alert('Has ingresado correctamente!')
        } else {
            alert('Usuario y/o contraseña incorrectos.')
        }
    })


})