const modalDanger = document.getElementById('modal_main');
modalDanger.classList.add('modal_active');

const modalSuccess = document.getElementById('modal_success');

const btn = document.querySelector('.show-success');

btn.onclick = function () {   
    modalSuccess.classList.add('modal_active');
    modalDanger.classList.remove('modal_active');
}

const modalClose = document.getElementsByClassName('modal__close_times');

function close() {
    modalDanger.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}

modalClose[0].onclick = close;
modalClose[1].onclick = close;
