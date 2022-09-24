document.addEventListener("DOMContentLoaded", function () {
    
    /*** Dropdown Toggle Added */
    jQuery(".main-menu ul li ul").parent().append("<span class='dropdown-toggle' data-toggle='dropdown'></span>");

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
            pillsTabContent.classList.toggle('first-tab');
        })
        mainTabNav.children[1].addEventListener('click', function () {
            tabContentArea.classList.toggle('d-none')
            pillsTabContent.classList.toggle('second-tab');
        })
        mainTabNav.children[2].addEventListener('click', function () {
            tabContentArea.classList.toggle('d-none')
            pillsTabContent.classList.toggle('third-tab');
        })
    }

    //  Handle Navigation:

    let hamburger_menu = document.getElementsByClassName("hamburger-menu")[0];
    let closeBtn = document.getElementsByClassName("close-btn")[0];

    let mobile_nav_wrapper = document.querySelector('.mobile-nav-wrapper');
    let navItem = document.querySelectorAll(".main-menu ul li");
    const body = document.querySelector('body');

    hamburger_menu.addEventListener("click", () => {
        mobile_nav_wrapper.classList.add('show-mobile-menu')
        body.classList.add('body-nav-gray')
    });

    closeBtn.addEventListener("click", () => {
        mobile_nav_wrapper.classList.remove('show-mobile-menu');
        body.classList.remove('body-nav-gray')

    })

    const navbaDropDown = document.querySelectorAll(".mobile-nav-wrapper .navbar-links ul ul");
    const navbaDropDownCount = navbaDropDown.length;

    for (let i = 0; i < navbaDropDownCount; i++) {
        let link = createNavIcon('fa-plus');
        navbaDropDown[i].parentNode.appendChild(link)
    }

    function createNavIcon(icon) {
        let link = document.createElement('a');
        link.innerHTML = '+';
        link.classList.add('submenu-icon');
        return link;
    }

    // open submenu

    const submenuIcon = document.querySelectorAll('.submenu-icon');
    for (let i = 0; i < submenuIcon.length; i++) {
        submenuIcon[i].addEventListener('click', function () {
            submenuIcon[i].parentNode.children[1].classList.toggle('expand-dropdown-mobile-menu');
            let submenuIconText = submenuIcon[i].innerText;
            if (submenuIconText === '+') {
                submenuIcon[i].innerText = '-';
            } else {
                submenuIcon[i].innerText = '+';
            }
        })
    }
   
})


// (function($) {
//     "use strict";

//     $(document).ready( function() {

//     }); // end document ready function

// })(jQuery); // End jQuery