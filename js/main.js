
$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: 3000
});

});

/*JQuerry - Меню*/
// $(".header-btn").click(function () {
//     $('.header').toggleClass('active');
//     $('.slider-top').toggleClass('not-active');
//
//     if ($('.header').hasClass('active')) {
//         $("body").addClass("fixed");
//     } else {
//         $("body").removeClass("fixed");
//     }
// });


/*JS - Меню*/
document.querySelector('.header-btn').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('.slider-top').classList.toggle('not-active');
    /*Зафиксировать меню, убрать скрол*/
    if (document.querySelector('.header').classList.contains('active')) {
        document.body.classList.add("fixed");
    } else {
        document.body.classList.remove("fixed");
    }
} );


