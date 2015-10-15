require(['jquery', 'konami'], function($) {
    var konamiPeeps = [];

    konamiPeeps = $('img[data-konami-picture]');

    $(window).konami({
        cheat: function () {
            konamiPeeps.each(function () {
                $(this).attr('src', $(this).data('konami-picture'));
            });
        }
    });
});
