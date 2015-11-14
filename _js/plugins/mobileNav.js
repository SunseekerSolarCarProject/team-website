var $ = require('jquery');

$(window).ready(function() {
    $('.mobile-menu-toggle').on('click', function() {
        if($('nav ul').css('display') == 'block') {
            $('nav ul').slideUp();
        } else {
            $('nav ul').slideDown();
        }
    });
});