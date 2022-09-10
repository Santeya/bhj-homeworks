const menuButton = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

function openMenu() {
    dropdownList.classList.toggle('dropdown__list_active');
    return false;
}

menuButton.addEventListener('click', openMenu);

const dropdownItemsArray = Array.from(document.querySelectorAll('.dropdown__item'));

function selectOption(event) { 
    document.querySelector('.dropdown__value').textContent = this.querySelector('a').textContent;
    dropdownList.classList.remove('dropdown__list_active');
    event.preventDefault();
}

for (let i = 0; i < dropdownItemsArray.length; i++) {
    dropdownItemsArray[i].addEventListener('click', selectOption); 
}
