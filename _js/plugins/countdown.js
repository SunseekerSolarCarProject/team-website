var jQuery = require('../lib/jquery/dist/jquery');

var numMilliseconds, parts;

numMilliseconds = {
    month:  2592000000,
    day:    86400000,
    hour:   3600000,
    minute: 60000,
    second: 1000
};

parts = ['month', 'day', 'hour', 'minute', 'second'];

(function ($) {
    $.fn.countdown = function (then, config) {
        var $this, diff, $values, methods;

        $this   = $(this);
        diff    = then - Date.now();
        $values = {};
        methods = {
            initialize: function () {
                var $container;

                $container = $('<ul class="countdown__container"></ul>');
                $container.appendTo($this);

                parts.forEach(function (e) {
                    var $value, $part;

                    $value     = $('<span class="countdown__part__value">0</span>');
                    $values[e] = $value;
                    $part      = $('<li class="countdown__part">' + e + 's</li>');

                    $value.prependTo($part);
                    $part.appendTo($container);
                });

                methods.countDown();
            },
            countDown: function () {
                methods.render();

                if (diff <= 0)
                    return;

                setTimeout(methods.countDown, numMilliseconds.second);
            },
            render: function () {
                var remain;

                remain = diff;

                parts.forEach(function (e) {
                    remain = methods.calcValue(e, remain);
                });
            },
            calcValue: function (e, remain) {
                var num;

                num = Math.floor(remain / numMilliseconds[e]);
                $values[e].text(num < 10 ? '0' + num : num);

                return remain % numMilliseconds[e];
            }
        };

        methods.initialize();
    };
})(jQuery);
