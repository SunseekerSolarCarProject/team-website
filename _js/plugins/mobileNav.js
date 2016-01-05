var $ = require('jquery');

$(window).ready(function() {
    $('.globalNavigation__mobileMenuToggle').on('click', function() {
        var $menu = $('.globalNavigation ul');

        if($menu.css('display') == 'block') {
            $menu.slideUp();
        } else {
            $menu.slideDown();
        }
    });
});