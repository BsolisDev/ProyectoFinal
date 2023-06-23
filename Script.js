
/* funcion de los botones de navegacion del contenido de menu (Daniel) */
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.getAttribute('aria-valuemax');
        let thisSwiper = document.getElementById('swiper' + id).swiper;
        thisSwiper.update();
    });
});
/* fin de la funcion de los botnes de navegacio */
