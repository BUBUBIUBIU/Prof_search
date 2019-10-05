import $ from 'jquery';

console.log(66);
$(document).ready(function(){
    $('.js--scroll-to-education').click(function(){
        console.log(7);
        $('html, body').animate({scrollTop: $('.section-education').offset().top}, 1000);
    })
})

