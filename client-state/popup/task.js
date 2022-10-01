const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function getCookie(key) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find((c) => c.startsWith(key + '='));
    return cookie ? cookie.substr(key.length + 1) : null;
}

function showModal() {
    if (getCookie('closedPopup') === null) {
        window.onload = setTimeout(() => {
            modal.classList.add('modal_active');
        }, 2000) 
    }
}

showModal();

modalClose.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'closedPopup=true; Expires=Mon, 01 May 2028 23:59:59 GMT';
    console.log(document.cookie);
}

