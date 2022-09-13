const reveals = document.querySelectorAll('.reveal');

let windowHeight = window.innerHeight;

window.addEventListener('scroll', func);

function func() {
    for (let reveal of reveals) {
        let revealTop = reveal.getBoundingClientRect().top;
        let revealBottom = reveal.getBoundingClientRect().bottom;
        if (revealTop < windowHeight && revealBottom < windowHeight && revealTop > 0) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    }
}