var $ = require('jquery');

require('./plugins/konami');

var konamiGoing, $showcase;

konamiGoing = false;
$showcase   = $('.showcase');

$(window).konami({
    cheat: function() {
        if(konamiGoing)
            return;

        konamiGoing = true;

        var c, v, sm4v, smov, bg;

        window.scrollTo(0, 0);

        v      = $('<video>');
        smov   = $('<source>');
        sm4v   = $('<source>');
        swebm  = $('<source>');
        bg     = $showcase.css('background');

        $showcase.css('background', '#000');

        v.css({
            width: '100%',
            height: $showcase.css('height'),
        });

        v.attr({
            controls: 'true',
            autoplay: 'true'
        });

        v.bind('ended', function() {
            v.remove();
            $showcase.css('background', bg);
            konamiGoing = false;
        });

        smov.attr({
            src: 'videos/DriverStyle.mov',
            type: 'video/quicktime'
        });

        sm4v.attr({
            src: 'videos/DriverStyle.m4v',
            type: 'video/m4v'
        });

        swebm.attr({
            src: 'videos/DriverStyle.webm',
            type: 'video/webm'
        });

        v.append(smov);
        v.append(sm4v);
        v.append(swebm);

        $showcase.append(v);
    }
});
