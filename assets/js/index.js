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
if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .nav-item').forEach(function (item) {
        item.addEventListener('mouseover', function (e) {

            let el_link = this.querySelector('a[data-bs-toggle]');

            if (el_link != null) {
                el_link.classList.add('show')
                let nextEl = el_link.nextElementSibling;
                el_link.classList.add('show');
                nextEl.classList.add('show');
            }

        });
        item.addEventListener('mouseleave', function (e) {
            let el_link = this.querySelector('a[data-bs-toggle]');

            if (el_link != null) {
                let nextEl = el_link.nextElementSibling;
                el_link.classList.remove('show')
                el_link.classList.remove('show');
                nextEl.classList.remove('show');
            }
        })
    });

}

// Init review
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

window.onload = ((e) => {
    e.preventDefault()
    activeTab()
});
window.addEventListener('hashchange', () => {
    activeTab()
})
function activeTab() {
    let url = location.href.replace(/\/$/, "");
    if (location.hash) {
        const hash = url.split("#");
        if (window.innerWidth >= 576) {
            $('#products a[data-bs-target="#' + hash[1] + '"]').tab("show");
            url = location.href.replace(/\/#/, "#");
            history.replaceState(null, null, url);
            setTimeout(() => {
                $(window).scrollTop(-1000);
            }, 400);

        } else {
            $('#products-mobile button[data-bs-target="#' + hash[1] + '"]').tab("show");
            url = location.href.replace(/\/#/, "#");
            history.replaceState(null, null, url);
        }
        if (hash[1] != 'meeting-tab-pane') {
            document.querySelector('.for-meeting-tab').classList.remove('show');
        } else {
            document.querySelector('.for-meeting-tab').classList.add('show');
        }
    }
}