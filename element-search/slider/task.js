const sliders = Array.from(document.querySelectorAll('.slider__item'));

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

function clickNext() {
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('slider__item_active')) {
            sliders[i].classList.remove('slider__item_active');
            sliders[++i].classList.add('slider__item_active');
        }; if (sliders[sliders.length - 1].classList.contains('slider__item_active')) {
            sliders[sliders.length - 1].classList.remove('slider__item_active')
            sliders[0].classList.add('slider__item_active');
        }
    }
}

function clickPrev() {
    for (let i = (sliders.length - 1); i >= 0; i--) {      
        if (sliders[i].classList.contains('slider__item_active')) {
            sliders[i].classList.remove('slider__item_active')
            sliders[--i].classList.add('slider__item_active');
        } if (sliders[0].classList.contains('slider__item_active')) {
            sliders[0].classList.remove('slider__item_active');
            sliders[sliders.length - 1].classList.add('slider__item_active');
        }
    }
}

arrowNext.onclick = clickNext;
arrowPrev.onclick = clickPrev;