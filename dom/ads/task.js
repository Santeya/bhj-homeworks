const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function rotateAd() {
    for (let rotatorCase of rotatorCases) {
        rotatorCase.classList.remove('rotator__case_active');
    }

    rotatorCases[index].classList.add('rotator__case_active');
    rotatorCases[index].style.color = rotatorCases[index].getAttribute('data-color');
    index++;
    if (index === rotatorCases.length) {
        index = 0;
    } 
}

setInterval(rotateAd, 1000);