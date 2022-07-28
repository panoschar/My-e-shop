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
        console.log(e.target.parentElement.children[1].textContent);
        console.log(e.target.parentElement.children[2].children[0].textContent);
        if (typeof window !== 'undefined') {
            let item = {
                id: i + 1,
                name: e.target.parentElement.children[1].textContent,
                price: e.target.parentElement.children[2].children[0].textContent,
                no:1
            };
            if(JSON.parse(localStorage.getItem('items')) === null) {
                items.push(item);
                localStorage.setItem("items",JSON.stringify(items));
            }else {
                const localItems = JSON.parse(localStorage.getItem("items"));
                localItems.map(data => {
                   if(item.id == data.id) {
                    item.no += 1;
                   }else {
                    items.push(data);
                   }
                });
                items.push(item);
                localStorage.setItem('items',JSON.stringify(items));
            }
} else {
    alert('not working');
}
    });
}

