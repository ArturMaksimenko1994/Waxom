$(document).ready(function(){

$('.slider__header').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    items:1,
    navText: ['<span class="iconBl2"><i class="fas fa-chevron-left"></i></span>', '<span class="iconBl2"><i class="fas fa-chevron-right"></i></span>']
})

$(".video__play").click(function(){
    $(".video__p").trigger('play');
})

$('.sliderPost').owlCarousel({
    loop:true,
    nav:true,
    navText: ['<span class="iconBl"><i class="fas fa-chevron-left"></i></span>', '<span class="iconBl"><i class="fas fa-chevron-right"></i></span>'],
    responsive:{
        320:{
            items:1
        },
        640:{
            items:2
        },
        960:{
            items:3
        }
    }
})
 




});
