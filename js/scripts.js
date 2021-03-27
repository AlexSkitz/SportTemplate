$(document).ready(function(){
    $('.mobile-button').on('click',function(){
        $('.flex-around').slideToggle();
        $(this).toggleClass('opened');
    })
})