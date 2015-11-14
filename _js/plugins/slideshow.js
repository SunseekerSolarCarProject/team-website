var jQuery = require('jquery');

(function($) {
    var $show, slides, current, next, stop, config, methods, transitions;

    slides  = [];
    current = -1;
    next    = 0;
    stop    = false;

    config = {
        'displayTime': 5,
        'slideTime':   1,
        'slideClass':  '.slide',
        'transition':  'fade'
    };

    methods = {
        init: function() {
            $show.find(config.slideClass).each(function() {
                slides[slides.length] = $(this);
            });

            methods.start();

            return this;
        },
        scheduleTransition: function() {
            if(stop)
                return;

            current = (current + 1) % slides.length;
            next    = (current + 1) % slides.length;

            setTimeout(function() {
                methods.nextSlide();
            }, config.displayTime * 1000);
        },
        nextSlide: function() {
            if(stop)
                return;

            switch(config.transition) {
                default:
                    transitions.fade();
            }
        },
        stop: function() {
            stop = true;
        },
        start: function() {
            stop = false;

            if(--current < 0)
                current = slides.length - 1;

            if(--next < 0)
                next = slides.length - 1;

            if(slides.length > 1)
                methods.scheduleTransition();
        },
        current: function() {
            return slides[current];
        }
    };

    transitions = {
        fade: function() {
            var fadeTime = (config.slideTime / 2) * 1000;

            slides[current].fadeOut(fadeTime, function() {
                slides[next].fadeIn(fadeTime, function() {
                    methods.scheduleTransition();
                });
            });
        }
    };

    $.fn.slideshow = function(conf) {
        $show  = $(this);
        config = $.extend(config, conf);
        return methods.init();
    };
})(jQuery);
