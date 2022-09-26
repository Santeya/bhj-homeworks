const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

const handler = function () {
    if (xhr.readyState === xhr.DONE) {

        const response = JSON.parse(xhr.responseText).data;

        pollTitle.innerText = response.title;

        const responseOptions = response.answers;

        for (let option of responseOptions) {
            pollAnswers.innerHTML +=
                `  <button class="poll__answer"> ${option} </button>  `
        }

        const btns = Array.from(document.querySelectorAll('.poll__answer'));
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }
    }
}

xhr.addEventListener('readystatechange', handler);

xhr.open('GET', url);
xhr.send();