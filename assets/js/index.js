(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// Init reviw
$('.reviews-slider').owlCarousel({
    stagePadding: 150,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    dragEndSpeed: 500,
    loop: true,
    margin: 30,
    autoWidth: true,
    dots: false,
    nav: true,
    navText: ['<img src="../assets/img/prev.svg" width="10">', '<img src="../assets/img/next.svg" width="10">'],
    responsive: {
        0: {
            items: 1,
            stagePadding: 10,
            autoWidth: false,
        },
        768: {
            items: 2,
            stagePadding: 0
        }
    }
})
$('.annoucement-slider .row').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    navContainer: $('.slider-nav'),
    navText: ['<img src="../assets/img/prev.svg" width="10">', '<img src="../assets/img/next.svg" width="10">'],
    responsive: {
        0: {
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 1000,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
})
$('#slider').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    dotsContainer: $('.dots-container'),
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    dragEndSpeed: 500,
})

