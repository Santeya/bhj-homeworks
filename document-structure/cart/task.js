const products = document.querySelector('.products');
const addButtons = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

products.onclick = function (event) {
    if (event.target.classList.contains('product__quantity-control_inc')) {
        +(event.target.previousElementSibling.innerText)++;
    }
    if (event.target.classList.contains('product__quantity-control_dec') && event.target.nextElementSibling.innerText > 1) {
        +(event.target.nextElementSibling.innerText)--;
    }
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = function (event) {

        for (let cartProduct of cart.children) {
            if (cartProduct.dataset.id === event.target.closest('.product').dataset.id) {
                let count = +(cartProduct.querySelector('.cart__product-count').innerText);
                count += +(event.target.previousElementSibling.querySelector('.product__quantity-value').textContent);
                cartProduct.querySelector('.cart__product-count').innerText = count;
                return false;
            }
        }

        document.querySelector('.cart__products').innerHTML += `
        <div class="cart__product" data-id=` + event.target.closest('.product').dataset.id + `>
        <img class="cart__product-image" src=` + event.target.closest('.product').querySelector('img').getAttribute('src') + `>
        <div class="cart__product-count">` + event.target.previousElementSibling.querySelector('.product__quantity-value').textContent + `</div>
        </div>`
    }
}


