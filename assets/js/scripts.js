document.addEventListener("DOMContentLoaded", function () {
    // mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu ');
    const body = document.querySelector('body');
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-mobile-menu')
        body.classList.toggle('bg-gray')
   })
})