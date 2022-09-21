document.addEventListener("DOMContentLoaded", function () {
    // mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.spellon-mobile-menu ');
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
    const hasChildrenUl = document.querySelectorAll('.has-children ul');
    for (let i = 0; i < hasChildrenUl.length; i++) {
        hasChildrenUl[i].classList.add('submenu')
    }
    // testimonial 
    var swiper = new Swiper(".tst-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        loop:true
    });
    // what we do section

    // what we do
    const contents = document.querySelectorAll('.content');
    const items = document.querySelectorAll('.item');
    const itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
        items[i].addEventListener('click', function (e) {
            let clickedEle = e.target;
            do {
                if (clickedEle == items[i]) {
                    let target = items[i].dataset.target;
                    showContent(target);
                    return;
                } else {
                    clickedEle = clickedEle.parentNode;
                }
            } while (clickedEle)
        })
    }

    function showContent(target) {
        let contentLength = contents.length;
        for (let i = 0; i < contentLength; i++) {
            let targetedContent = contents[i].dataset.content;
            if (targetedContent === target) {
                toggleData(contents[i]);
            }
        }
    }
    function toggleData(el) {
        const show = document.querySelectorAll('.show');
        let showLength = show.length;
        for (let i = 0; i < showLength; i++) {
            show[i].classList.remove('show');
        }
        el.classList.add('show');
    }
   // tabs
    if(screen.width < 992){
        const mainTabNav = document.querySelector('.main-tab-nav');
        const tabContentArea = document.querySelector('.tab-content-area ');
        const pillsTabContent = document.getElementById('pills-tabContent');
        mainTabNav.children[0].addEventListener('click', function () {
            tabContentArea.classList.toggle('d-none')
            // pillsTabContent.style.top = '120px';
            pillsTabContent.classList.toggle('first-tab');
        })
        mainTabNav.children[1].addEventListener('click', function () {
            tabContentArea.classList.toggle('d-none')
            // pillsTabContent.style.top = '210px'
            pillsTabContent.classList.toggle('second-tab');
        })
        mainTabNav.children[2].addEventListener('click', function () {
            tabContentArea.classList.toggle('d-none')
            // pillsTabContent.style.top = '310px'
            pillsTabContent.classList.toggle('third-tab');
        })
    }
   
})