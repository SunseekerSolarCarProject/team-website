require(['jquery', 'slideshow', 'konami'], function($) {
    var bigSlide, konamiGoing;

    bigSlide    = $('.slideshow').slideshow();
    konamiGoing = false;

    $(window).konami({
        cheat: function() {
            if(konamiGoing)
                return;

            konamiGoing = true;

            var c, v, s, bg, ht;

            bigSlide.stop();
            window.scrollTo(0, 0);

            c  = bigSlide.current();
            v  = $('<video>');
            s  = $('<source>');
            bg = c.css('background-image');
            ht = c.css('height');

            c.css('height', '720px');
            c.css('background-color', '#000');
            c.css('background-image', 'none');
            c.css('text-indent', '0px');
            c.text('');

            v.attr('width', '100%');
            v.attr('height', '720');
            v.attr('controls', 'true');
            v.attr('autoplay', 'true');

            v.bind('ended', function() {
                v.remove();

                c.css('background-color', 'transparent');
                c.css('background-image', bg);
                c.css('height', ht);

                konamiGoing = false;
                bigSlide.start();
            });

            s.attr('src', 'videos/DriverStyle.mov');
            s.attr('type', 'video/quicktime');

            v.append(s);
            c.append(v);
        }
    });
});
