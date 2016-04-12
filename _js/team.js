var $ = require('jquery');

require('./plugins/konami');

var konamiPeeps = [],
    enabled     = false;

konamiPeeps = $('img[data-konami-picture]');

$(window).konami({
    cheat: function () {
        if (enabled)
            return;

        enabled = true;

        konamiPeeps.each(function () {
            var $this = $(this),
                src   = $this.attr('src');

            $this.fadeOut(function () {
                $this.attr('src', $this.data('konami-picture'));

                $('.member__data').each(function () {
                    if ($(this).find('.member__block__info--quote').length)
                        $(this).find('.member__block__info').hide();

                    $('.member__block__info--quote').show();
                });

                $this.fadeIn(function () {
                    setTimeout(function () {
                        $this.fadeOut(function () {
                            $this.attr('src', src);

                            $('.member__block__info').show();
                            $('.member__block__info--quote').hide();

                            $this.fadeIn(function () {
                                enabled = false;
                            });
                        });
                    }, 10000);
                });
            });
        });
    }
});
