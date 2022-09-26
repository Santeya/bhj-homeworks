const products = document.querySelector('.products');
const addButtons = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

products.onclick = function (event) {
    let target = event.target;
    if (target.classList.contains('product__quantity-control_inc')) {
        +(target.previousElementSibling.innerText)++;
    }
    if (target.classList.contains('product__quantity-control_dec') && target.nextElementSibling.innerText > 1) {
        +(target.nextElementSibling.innerText)--;
    }
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].onclick = function (event) {
        const productId = event.target.closest('.product').dataset.id;
        const productQuantity = event.target.previousElementSibling.querySelector('.product__quantity-value').textContent;

        for (let cartProduct of cart.children) {
            if (cartProduct.dataset.id === productId) {
                let count = +(cartProduct.querySelector('.cart__product-count').innerText);
                count += +productQuantity;
                cartProduct.querySelector('.cart__product-count').innerText = count;
                return false;
            }
        }

        document.querySelector('.cart__products').innerHTML += `
        <div class="cart__product" data-id=${productId}>
        <img class="cart__product-image" src= ${event.target.closest('.product').querySelector('img').getAttribute('src')}>
        <div class="cart__product-count"> ${productQuantity} </div>
        </div>`
    }
}


