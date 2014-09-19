define(['jquery'], function($) {
    var $nav;
    $nav = $('header nav');
    $nav.children('.toggle').on('click', function() {
        if($nav.children('.wrap').css('display') == 'none') {
            $nav.children('.wrap').slideDown();
        } else {
            $nav.children('.wrap').slideUp();
        }
    });
});
