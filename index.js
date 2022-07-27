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

    // local storage

    if (typeof (storage) !== 'undefined') {
        console.log('working')
    } else {
        console.log('not working')
    }
    console.log(localStorage === window.localStorage);
    localStorage.setItem('name', 'Tom');

    console.log(localStorage.getItem('name'));

    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        // 👉️ can use localStorage here
      } else {
        console.log('You are on the server')
        // 👉️ can't use localStorage
      }
};

