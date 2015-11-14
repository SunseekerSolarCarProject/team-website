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

                $this.fadeIn(function () {
                    setTimeout(function () {
                        $this.fadeOut(function () {
                            $this.attr('src', src);

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
