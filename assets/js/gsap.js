gsap.registerPlugin(ScrollTrigger)

function fadeLeft(element,startPosition,animationTime) {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            toggleActions: 'restart none restart restart'
        }
    }
    )
    tl.to(element,
        {
            x: startPosition,
            duration: 0.1
        }).to(element, {
     
            duration: animationTime,
            x: 0
        })
}
function listAnimation(element, index) {
    fadeLeft(element, -100, index * 1)
}

// hero animation

// title
fadeLeft('.hero-title h1',-100,1)
fadeLeft('.hero-desc p',-100,2)
fadeLeft('.hero-btn ', -100, 2.5)
fadeLeft('.hero-right ', 100, 2)

// counter section

let counters = document.querySelectorAll('.counter-item');
counters.forEach(counterAnimation)
function counterAnimation(element,index) {
    fadeLeft(element, -100, index*1)
}

// brand section

fadeLeft('.brand-title', -100, 1)
let brandsList = document.querySelectorAll('.brands-list li');
brandsList.forEach(brandsAnimation)
function brandsAnimation(element, index) {
    fadeLeft(element, -100, index * 1)
}

// property management

fadeLeft('.property-management-title',-100,1)
fadeLeft('.property-management-subtitle', 100, 2)
let mainTabList = document.querySelectorAll('.main-tab-nav li')
mainTabList.forEach(listAnimation)
const pillsTabContent = document.getElementById("pills-tabContent");
fadeLeft(pillsTabContent, -100, 1)

// services
fadeLeft('.services-title', -100, 1)
fadeLeft('.services-subtitle', 100, 2)
fadeLeft('.content-wrapper', -100, 2)

// experiencs
fadeLeft('.experience-title', -100, 2)
fadeLeft('.experience-subtitle', -100, 2)
fadeLeft('.experience-btn', 100, 2)
fadeLeft('.ex-img', -100, 2)
let exCard = document.querySelectorAll('.ex-card');
exCard.forEach(listAnimation)

// testimonial testimonial-section-title
fadeLeft('.testimonial-section-title', -100, 2)
fadeLeft('.tst-swiper-container ', -100, 2)
fadeLeft('.blog-title', -100, 2)
fadeLeft('.blog-subtitle', 100, 2)

// blog spellon-blog-load-more-button
let blogItem = document.querySelectorAll('.blog-item')
blogItem.forEach(listAnimation)
fadeLeft('.spellon-blog-load-more-button', 100, 2)

//contact
fadeLeft('.contact-title', -100, 1)
fadeLeft('.contact-subtitle', -100, 1.5)
fadeLeft('.spellon-contact-form-img ', 100, 1)
// footer 
fadeLeft('.spellon-footer-area', -100, 1)