let clickerCounter = +(document.getElementById('clicker__counter').textContent);
let cookie = document.getElementById('cookie');

function count () {
    clickerCounter++;
    document.getElementById('clicker__counter').textContent = clickerCounter;
    if (cookie.width === 200) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
    return clickerCounter;
}

cookie.addEventListener('click', count);

let startTime = new Date().getTime();

function clickSpeed () {
    let clickTime = new Date().getTime();
    let avgSpeed = +(((clickTime - startTime) / clickerCounter) / 1000).toFixed(2);
    document.getElementById('clicker__speed').textContent = avgSpeed;
    return avgSpeed;
} 

cookie.addEventListener('click', clickSpeed);