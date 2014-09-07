define(['jquery'], function($) {
    var $nav, $toggle;

    $nav    = $('header nav');
    $toggle = $nav.children('.toggle');
console.log($nav);
console.log($toggle);
    $toggle.on('click', function() {
        $nav.toggleClass('active');
    });
});