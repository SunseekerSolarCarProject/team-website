(function($) {
    var $show, slides, current, next, config, methods, transitions;

    slides  = [];
    current = -1;
    next    = 0;

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

            if(slides.length > 1) {
                methods.scheduleTransition();
            }
        },
        scheduleTransition: function() {
            current = (current + 1) % slides.length;
            next    = (current + 1) % slides.length;

            setTimeout(function() {
                methods.nextSlide();
            }, config.displayTime * 1000);
        },
        nextSlide: function() {
            switch(config.transition) {
                default:
                    transitions.fade();
            }
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
        methods.init();
    };
})(jQuery);
