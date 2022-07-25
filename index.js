window.onload = function() {
   const iconShopping = document.querySelector('.cart');
   const cartBox = document.querySelector('.cart-box');
   iconShopping.addEventListener('click', function() {
    cartBox.classList.add('active');
   })
}