// Init reviw
$('.reviews-slider').owlCarousel({
    stagePadding: 150,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    dragEndSpeed:500,
    loop:true,
    margin:30,
    autoWidth:true,
    dots:false,
    nav:true,
    navText:['<img src="../assets/img/prev.svg" width="10">','<img src="../assets/img/next.svg" width="10">'],
    responsive:{
        0:{
            items:1,
            stagePadding:10,
            autoWidth:false,
        },
        768:{
            items:2,
            stagePadding:0
        }
    }
})