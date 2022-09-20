const sideWidget = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input')
const currentTime = () => new Date().toLocaleTimeString().slice(0, 5);

const messagesBot = [
    'Вы вообще кто?',
    'Что Вам нужно?',
    'Некогда мне с Вами разговаривать',
    'Напишите через год',
    'Мы Вам ничего не продадим',
    'Не мешайте пить чай']

function openDialog() {
    chatWidget.classList.add('chat-widget_active');
}

sideWidget.onclick = openDialog;

const messages = document.querySelector('.chat-widget__messages');

document.addEventListener('keydown', (event => {
    if (event.key === 'Enter' && (document.getElementById('chat-widget__input').value !== '')) {
        messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">`+ currentTime() + `</div>
    <div class="message__text">`+ chatInput.value + `</div>
    </div>`;

        chatInput.value = '';

        let messageBot = messagesBot[Math.trunc(Math.random() * messagesBot.length)];
        messages.innerHTML += `
    <div class="message">
    <div class="message__time">`+ currentTime() + `</div>
    <div class="message__text">`+ messageBot + `</div>
    </div>`;

    }
}))



