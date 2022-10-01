const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
const signinBtn = document.getElementById('signin__btn');
const signinForm = document.getElementById('signin')
const welcome = document.getElementById('welcome');

const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];

function signIn() {
    signinForm.classList.remove('signin_active');
    document.getElementById('user_id').innerText = localStorage.userId;
    welcome.classList.add('welcome_active');
}

window.onload = () => { 
    if (localStorage.userId) {
        signIn();
    }
}

document.getElementById('signin__form').addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(document.getElementById('signin__form'));

    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
        if (xhr.response.success === false) {
            alert('Неправильный логин/пароль');
            login.value = '';
            password.value = '';
        } else if (xhr.response.success === true) {
            localStorage.userId = xhr.response.user_id;
            signIn();
        }
    })

    xhr.open('POST', url);
    xhr.responseType = 'json';
    xhr.send(formData);
})

document.getElementById('signout__btn').addEventListener('click', (event) => {
    event.preventDefault();
    welcome.classList.remove('welcome_active');
    login.value = '';
    password.value = '';
    localStorage.clear();
    signinForm.classList.add('signin_active');
})
