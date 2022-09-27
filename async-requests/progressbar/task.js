const progress = document.getElementById('progress');

const url = 'https://netology-slow-rest.herokuapp.com/upload.php';

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
        //console.log(`PROGRESS Отправлено ${event.loaded} из ${event.total} байт`)
        progress.value = event.loaded/event.total;
    }

    xhr.open('POST', url);

    const formData = new FormData(document.getElementById('form'));
    xhr.send(formData);
});