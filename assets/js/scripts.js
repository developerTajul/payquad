document.addEventListener("DOMContentLoaded", function () {
    // mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu ');
    const body = document.querySelector('body');
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-mobile-menu')
        body.classList.toggle('bg-gray')
    })
    // dropdown menu
    const hasChildren = document.querySelectorAll('.has-children');
    let hasChildrenLength = hasChildren.length;
    for (let i = 0; i < hasChildrenLength; i++) {
        let el = document.createElement('span');
        el.classList.add('fa-solid', 'fa-chevron-down', 'dropdownIcon');
        hasChildren[i].appendChild(el);
    }
    // testimonial 
    var swiper = new Swiper(".tst-slider", {
        navigation: {
          
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        loop:true
    });
})