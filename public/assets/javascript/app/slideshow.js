(function($) {
    $.fn.slideshow = function() {
        var $this, config, methods, slides, current, next;

        $this   = $(this);
        slides  = [];
        current = 0;
        config  = {
            slideDuration:      5000,
            transition:         'fade',
            transitionDuration: 1000
        };

        if(arguments.length) {
            $.extend(config, arguments[0]);
        }

        methods = {
            init: function() {
                $this.find('ul').children('li').each(function() {
                    slides[slides.length] = $(this);
                });

                methods.setTimer();
            },
            next: function() {
                next = current + 1;

                if(next >= slides.length) {
                    next = 0;
                }

                methods.doTransition();
            },
            doTransition: function() {
                switch(config.transition) {
                    case 'fade':
                       slides[current].fadeOut(config.transitionDuration / 2, function () {
                           slides[next].fadeIn(config.transitionDuration / 2);
                       });
                       break;
                    default:
                        console.log('Invalid Transition!');
                }

                current = next;
                methods.setTimer();
            },
            setTimer: function() {
                setTimeout(function() {
                    methods.next();
                }, config.slideDuration);
            }
        };

        methods.init();
    };
})(jQuery);