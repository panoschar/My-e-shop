 // Validate form
 const nameInput = document.querySelector("#name");
 const email = document.querySelector("#email");
 const message = document.querySelector("#message");
 const success = document.querySelector("#success");
 const errorNodes = document.querySelectorAll(".error");

 function validateForm() {

    clearMessages();

     if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name can't be blank";
        nameInput.classList.add("error-border")
     }
     if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email";
        email.classList.add("error-border")
     }
 }

 function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border")
 }

 function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
 }



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

    // add data to local storage

    const addToCartButton = document.getElementsByClassName('product-grid__btn product-grid__add-to-cart');
    let items = [];
    for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].addEventListener('click', function (e) {
           
            if (typeof window !== 'undefined') {
                let item = {
                    id: i + 1,
                    name: e.target.parentElement.children[1].textContent,
                    price: e.target.parentElement.children[2].children[0].textContent,
                    quantity: 1
                };

                if (JSON.parse(localStorage.getItem('items')) === null) {
                    items.push(item);
                    localStorage.setItem("items", JSON.stringify(items));
                    window.location.reload();
                } else {
                    const localItems = JSON.parse(localStorage.getItem("items"));
                    localItems.map(data => {
                        if (item.id == data.id) {
                            item.quantity = data.quantity + 1;
                            item.price = parseInt(data.price) + parseInt(item.price);

                        } else {
                            items.push(data);
                        }
                    });
                    items.push(item);
                    localStorage.setItem('items', JSON.stringify(items));
                    window.location.reload();

                }
            } else {
                alert('not working');
            }

        });
    }

    // adding data to shopping cart
    const iconShoppingP = document.querySelector('.iconShopping spam');
    let quantity = 0;
    JSON.parse(localStorage.getItem('items')).map(data => {
        quantity = quantity + data.quantity;
    });
    iconShoppingP.innerHTML = quantity;


    const cartBoxTable = cartBox.querySelector('table');
    let tableData = '';
    tableData += '<tr class="table-row"><th class="product-id"> Code no. </th><th class="product-name"> Item name </th><th class="product-quantity"> Quantity </th><th> Item price </th><th></th></tr>';
    if (JSON.parse(localStorage.getItem('items')) === null) {
        tableData += '<tr><td> No items found </td></tr>'
    } else {
        JSON.parse(localStorage.getItem('items')).map(data => {
            tableData += '<tr><th>' + data.id + '</th><th>' + data.name + '</th><th>' + data.quantity + '</th><th class="price">' +
                data.price + "" + '<span>$</span>' + '</th><th><a class="button-55" href="#" onclick = Delete(this);> Remove </a></th></tr>';
            //     let total = 0;
            //    let values = Object.values(data);
            //    values.forEach(element => {
            //     total = total + data.price;
            //    })
            //    console.log(total)
        });


        // let removeItem = document.getElementsByClassName('cart-button');
        // console.log(removeItem)
        // for(let i = 0; i < removeItem.length; i++) {
        //  let button = removeItem[i]
        //  button.addEventListener('click', function() {
        //      console.log('clicked')
        //  });
        // };
    }
    cartBoxTable.innerHTML = tableData;

};



