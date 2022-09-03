let timer = (document.getElementById('timer').textContent);

let timerId = setInterval(() => {
    if (timer !== 0) {
        timer -= 1;
        document.getElementById('timer').textContent = timer;
    } else {
        clearInterval(timerId);
        return alert('Вы победили в конкурсе!');
    }
}, 1000);

