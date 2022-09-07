const menuItemsLinks = Array.from(document.querySelectorAll('.menu_main > li.menu__item > a.menu__link'));

console.log(menuItemsLinks);
console.log(menuItemsLinks[0].nextElementSibling)

for (let i = 0; i < menuItemsLinks.length; i++) {
    menuItemsLinks[i].onclick = openSubMenu;
};

function openSubMenu() {
    if (this.nextElementSibling.classList.contains('menu_active')) {
        this.nextElementSibling.classList.remove('menu_active');      
    } else {
        this.nextElementSibling.classList.add('menu_active');
    }
    return false;
}
    