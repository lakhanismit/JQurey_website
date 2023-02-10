// HEADER & GO TO TOP
jQuery(document).ready(() => {
    jQuery(".navbar-toggle").click(function () {
        jQuery("header").toggleClass("slide");
    })
});
jQuery(window).scroll(() => {
    if (jQuery(window).scrollTop() >= 300) {
        jQuery("header").addClass("fixed-header");
        jQuery(".go-to-top").addClass("gotop");
    } else {
        jQuery("header").removeClass("fixed-header");
        jQuery(".go-to-top").removeClass("gotop");
    }

});
jQuery(window).scroll(() => {
    jQuery("header").removeClass("slide");
});



// CARAOUSEL
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 100,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            476: {
                items: 3
            },
            576: {
                items: 4
            },
            1080: {
                items: 6
            }
        }
    });

});



// REVIEW CAROUSEL
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// CURSOR
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});



// PRE LOADER
$(window).preloader({
    delay: 2000
});
$(window).preloader({
    selector: '#preloader',
    type: 'document',
    removeType: 'fade',
    fadeDuration: 750,
    delay: 0
});