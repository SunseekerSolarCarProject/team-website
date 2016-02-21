var jQuery = require('jquery');

var resolutions;

resolutions = {
    month: {
        duration: 2592000000,
        units: 'Months'
    },
    day: {
        duration: 86400000,
        units: 'Days'
    },
    hour: {
        duration: 3600000,
        units: 'Hours'
    },
    minute: {
        duration: 60000,
        units: 'Minutes'
    },
    second: {
        duration: 1000,
        units: 'Seconds'
    }
};

(function ($) {
    $.fn.countdown = function (then, opts) {
        var $this, $values, diff, options, methods;

        $this   = $(this);
        $values = {};
        diff    = then - Date.now();

        options = $.extend({
            resolution: 'second'
        }, opts);

        methods = {
            initialize: function () {
                var $container, p;

                $container = $('<ul class="countdown__container"></ul>');
                $container.appendTo($this);

                for (p in resolutions) {
                    var $value, $part;

                    $value     = $('<span class="countdown__part__value">0</span>');
                    $values[p] = $value;
                    $part      = $('<li class="countdown__part">' + resolutions[p].units + '</li>');

                    $value.prependTo($part);
                    $part.appendTo($container);
                }

                methods.countDown();
            },
            countDown: function () {
                methods.render();

                if (diff <= 0)
                    return;

                setTimeout(methods.countDown, resolutions[options.resolution].duration);
            },
            render: function () {
                var remain, p;

                remain = diff;
                diff  -= resolutions[options.resolution].duration;

                for (p in resolutions) {
                    remain = methods.calcValue(p, remain);
                }
            },
            calcValue: function (e, remain) {
                var num;

                num = Math.floor(remain / resolutions[e].duration);
                $values[e].text(num < 10 ? '0' + num : num);

                return remain % resolutions[e].duration;
            }
        };

        methods.initialize();
    };
})(jQuery);
