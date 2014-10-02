(function ($) {
    var config = {
        attr: {
            trigger: {
                name:  'lightbox',
                value: 'true'
            },
            caption:    'caption',
            credit:     'credit',
            creditLink: 'credit-url'
        },
        group: {
            tag:  {
                type: '*',
                attr: {
                    name:  'class',
                    value: 'lightbox-group'
                }
            },
            loop: true
        },
        metrics: {
            callback: null
        },
        caption: {
            length: 60,
            more:   'Show More',
            less:   'Show Less'
        }
    }, methods = {};

    methods = {
        clickHandler: function (callback) {
            methods.init();

            var $lightbox = $('#lightbox-container'),
                $img      = $(this),
                image     = new Image();

            $('#lightbox-container img').attr('src', $img.attr('src'));

            methods.setCaption($img);

            if(methods.isMobile()) {
                $lightbox.show();
            } else {
                $lightbox.fadeIn();
            }

            image.onload = function () {
                methods.positionImage(image.width, image.height);

                if(typeof callback === 'function') {
                    callback(this);
                }
            };

            image.src = $img.attr('src');
        },
        init: function () {
            $('body').append('<div id="lightbox-container"><div id="lightbox-header"><div id="lightbox-close">Close</div></div><div id="lightbox-navigation"><div id="lightbox-previous">Previous</div><div id="lightbox-next">Next</div></div><div id="lightbox-main"><img></div><div id="lightbox-footer"><div id="lightbox-caption"></div></div></div>');

            methods.onClick($('#lightbox-close'), methods.handleClose);
            methods.onClick($('#lightbox-container img'), methods.toggleCaption);
        },
        setCaption: function ($img) {
            var caption, $caption, $original, expand;

            if(typeof $img.attr(config.attr.caption) != 'string') {
                $('#lightbox-caption').hide();
                return;
            }

            caption = $img.attr(config.attr.caption);

            if(caption.length > config.caption.length && methods.isMobile()) {
                $original = $('<div id="lightbox-caption-expanded">' + caption + '<br /><br /><a id="lightbox-caption-collapse">' + config.caption.less + '</a></div>');
                $caption  = $('<div id="lightbox-caption-collapsed">' + caption.substr(0, config.caption.length) + ' (<a id="lightbox-caption-expand">' + config.caption.more + '</a>)</div>');

                $original.hide();

                $('#lightbox-caption').append($original).append($caption);

                methods.onClick($('#lightbox-caption-expand'), function () {
                    $('#lightbox-container img').fadeOut(function () {
                        $('#lightbox-footer').toggleClass('expanded');
                        $('#lightbox-caption-collapsed').hide();
                        $('#lightbox-caption-expanded').show();
                    });
                });

                methods.onClick($('#lightbox-caption-collapse'), function () {
                    $('#lightbox-footer').toggleClass('expanded');
                    $('#lightbox-caption-expanded').hide();
                    $('#lightbox-caption-collapsed').show();
                    $('#lightbox-container img').fadeIn();
                });
            } else {
                $('#lightbox-caption').html(caption);
            }

            $('#lightbox-footer').show();
        },
        positionImage: function (width, height) {
            var $container, available, $img, diff;

            $container = $('#lightbox-container');
            available  = $container.height() - ($container.height() * .15);

            $img = $('#lightbox-container img');
            diff = 0;

            if(height > available) {
                diff    = (available * .9) / height;
                height *= diff;
                width  *= diff;
            }

            if(width > $container.width()) {
                diff    = $container.width() / width;
                height *= diff;
                width  *= diff;
            }

            $img.css({
                position: 'absolute',
                width:    width + 'px',
                height:   height + 'px',
                top:      (($container.height() - height) / 2) + 'px',
                left:     (($container.width() - width) / 2) + 'px'
            });

            $img.show();
        },
        isMobile: function () {
            /*
             * Based off of Bootstrap 3
             *
             * Screens with widths of at least 992 pixels are
             * considered desktops/non-mobile devices.
             */
            if($(window).width() < 992) {
                return true;
            }

            return false;
        },
        handleClose: function () {
            $('#lightbox-container').remove();
        },
        toggleCaption: function () {
            var $caption = $('#lightbox-footer');

            if($caption.css('display') == 'none') {
                $caption.fadeIn();
            } else {
                $caption.fadeOut();
            }
        },
        onClick: function ($obj, callback) {
            $obj.on('click', callback);
            $obj.on('tap', callback);
        }
    }

    $.lightbox = function (vars) {
        config = $.extend(config, vars);

        $('img[' + config.attr.trigger.name + '="' + config.attr.trigger.value + '"]').each(function () {
            $(this).on('click', methods.clickHandler.bind(this, config.metrics.callback));
            $(this).on('tap', methods.clickHandler.bind(this, config.metrics.callback));
        });
    };
})(jQuery);
