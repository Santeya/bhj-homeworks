const links = Array.from(document.querySelectorAll('.has-tooltip'));

const tips = [];

for (let i = 0; i < links.length; i++) {
    let tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.innerText = links[i].getAttribute('title');
    tips.push(tip);
    links[i].insertAdjacentElement("afterend", tips[i])
}

function showTip(event) {
    event.preventDefault();

    if (this.nextElementSibling.classList.contains('tooltip_active')) {
        for (let i = 0; i < tips.length; i++) {
            links[i].nextElementSibling.classList.remove('tooltip_active');
        }
    } else {
        for(let i = 0; i < tips.length; i++) {
            links[i].nextElementSibling.classList.remove('tooltip_active');
        }

        this.nextElementSibling.classList.add('tooltip_active');
        const { left, bottom } = this.getBoundingClientRect();
        this.nextElementSibling.style.top = (bottom + 5).toString() + 'px';
        this.nextElementSibling.style.left = left.toString() + 'px';
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', showTip);
}
