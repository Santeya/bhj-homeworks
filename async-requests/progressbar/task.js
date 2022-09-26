const progress = document.getElementById('progress');

const url = 'https://netology-slow-rest.herokuapp.com/upload.php';

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onloadstart = () => {
        progress.value = 0.2;
    }
    xhr.upload.onprogress = () => {
        progress.value = 0.7;
    }
    xhr.upload.onload = () => {
        progress.value = 1;
    }

    xhr.open('POST', url);

    const formData = new FormData(document.getElementById('form'));
    xhr.send(formData);
});