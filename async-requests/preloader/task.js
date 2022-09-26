const url = 'https://netology-slow-rest.herokuapp.com';
const currencyList = document.getElementById('items');

const xhr = new XMLHttpRequest();

const handler = function () {
    if (xhr.readyState === xhr.DONE) {
        document.getElementById('loader').classList.remove('loader_active');
        
        let responseValute = (JSON.parse(xhr.responseText)).response.Valute;

        let keysValute = Object.keys(responseValute);

        for (let key of keysValute) {
            currencyList.innerHTML +=
                `<div class="item">
                <div class="item__code">${responseValute[key].CharCode}</div>
                <div class="item__value">${responseValute[key].Value}</div>
                <div class="item__currency">руб.</div></div >`           
        }       
    }
}

xhr.addEventListener('readystatechange', handler);

xhr.open('GET', url);
xhr.send();