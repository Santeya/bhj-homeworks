const progress = document.getElementById('progress');

const url = 'https://netology-slow-rest.herokuapp.com/upload.php';

const xhr = new XMLHttpRequest();
/*
const handler = function () {
    
    if (xhr.upload.loadstart) {
        progress.value = 0.2;
    } else if (xhr.upload.progress) {
        progress.value = 0.5;
    } else if (xhr.upload.load) {
        progress.value = 0.7;
    } else if (xhr.upload.loadend) {
        progress.value = 1;
    }
}*/

xhr.upload.onloadstart = () => {
    progress.value = 0.2;
}

xhr.upload.onprogress = () => {
    progress.value = 0.7;
}

xhr.upload.onload = () => {
    progress.value = 1;
}
/*
xhr.addEventListener('upload', handler)
*/

xhr.open('POST', url);


const formData = new FormData(document.getElementById('form'));
const file = document.getElementById('file').file;

formData.append('file', file)

xhr.send(formData);