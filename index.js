window.onload = function() {
   const iconShopping = document.querySelector('.iconShopping');
   const cartCloseButton = document.querySelector('.fa-close')
   const cartBox = document.querySelector('.carBox');

   iconShopping.addEventListener("click", function() {
       cartBox.classList.add('active');
   });
   cartCloseButton.addEventListener("click", function() {
      cartBox.classList.remove('active');
  });
}