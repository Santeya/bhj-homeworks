const tabArray = Array.from(document.querySelectorAll('.tab'));
const tabContentArray = Array.from(document.querySelectorAll('.tab__content'));


for (let i = 0; i < tabArray.length; i++) {
    tabArray[i].addEventListener('click', openTab)

    function openTab(event) {
        for (let i = 0; i < tabArray.length; i++) {
            tabArray[i].classList.remove('tab_active');
            tabContentArray[i].classList.remove('tab__content_active');
        }
        
        tabArray[i].classList.add('tab_active');
        tabContentArray[i].classList.add('tab__content_active');
    }
}

