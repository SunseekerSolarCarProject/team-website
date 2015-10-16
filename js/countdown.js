var secondsInA = {
    month:  2592000000,
    day:    86400000,
    hour:   3600000,
    minute: 60000,
    second: 1000
};

(function ($) {
    $.fn.countdown = function (then) {
        var $this  = $(this),
            $parts = {},
            now    = new Date(),
            diff   = then.getTime() - now.getTime(),
            methods;

        methods = {
            initialize: function () {
                $parts.month  = methods.generateField('Months');
                $parts.day    = methods.generateField('Days');
                $parts.hour   = methods.generateField('Hours');
                $parts.minute = methods.generateField('Minutes');
                $parts.second = methods.generateField('Seconds');

                methods.render();
            },
            generateField: function (unit) {
                var $field    = $('<li class="countdown__stat"><spam class="countdown__stat__unit">' + unit + '</span></li>'),
                    $quantity = $('<span class="countdown__stat__quantity">0</span>');

                $field.appendTo($this);
                $quantity.prependTo($field);

                return {
                    part:     $field, 
                    quantity: $quantity
                };
            },
            render: function () {
                if (--diff < 0)
                    return;

                methods.updateValue(
                    methods.updateValue(
                        methods.updateValue(
                            methods.updateValue(
                                methods.updateValue(
                                    diff, 'month'
                                ), 'day'
                            ), 'hour'
                        ), 'minute'
                    ), 'second');

                setTimeout(methods.render, 1000);
            },
            updateValue: function (seconds, part) {
                var quantity = parseInt(seconds / secondsInA[part]);

                $parts[part].quantity.html((quantity < 10 ? '0' : 0) + quantity);

                return seconds % secondsInA[part];
            }
        };

        methods.initialize();
    };
})(jQuery);
