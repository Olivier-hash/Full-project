$(document).ready(function(){
 // hello slider
 $('#hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    items: 1,
    smartspeed: 1000,
    navText : ['PREV',' NEXT '],
    responsive:{
        0:{
           nav: false,
        },
        768: {
            nav: true,
        }
    }
});

 // PROJECT SLIDER
 $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    margin:24,
    smartspeed: 1000,
    navText : ['PREV',' NEXT '],
    responsive:{
        0:{
           
        },
        768: {
            
        },
        1140: {
            items: 2,
            center: true,
            dots: true,
        }
    }
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
    smartSpeed: 800,
   
})

});