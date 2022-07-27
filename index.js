window.onload = function () {
    const iconShopping = document.querySelector('.iconShopping');
    const cartCloseButton = document.querySelector('.fa-close')
    const cartBox = document.querySelector('.cartBox');

    iconShopping.addEventListener("click", function () {
        cartBox.classList.add('active')
    });

    cartCloseButton.addEventListener("click", function () {
        cartBox.classList.remove('active')
    });
};

// add data to local storage

const addToCartButton = document.getElementsByClassName('product-grid__btn product-grid__add-to-cart');
let items = [];
for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener('click', function (e) {
        console.log(e.target.parentElement.children[0]);
        if (typeof window !== 'undefined') {
            let item = {
                id: i + 1,
                name: e.target.parentElement.children[0],
            };
} else {
    alert('not working');
}
    });
}

