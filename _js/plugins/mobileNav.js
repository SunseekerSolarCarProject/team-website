var $ = require('jquery');

$(window).ready(function() {
    $('.globalNavigation__mobileMenuToggle').on('click', function() {
        var $this = $(this);
        var $menu = $('.globalNavigation ul');
        var style = 'expanded';
        var text  = 'collapsed';

        $menu.toggleClass(style);

        if ($menu.hasClass(style)) {
            text = 'expanded';
        }

        $this.text($this.data(text));
    });
});
