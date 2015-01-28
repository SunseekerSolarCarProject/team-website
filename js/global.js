/**
 * Mobile Navigation
 */
$(window).ready(function() {
    $('.mobile-menu-toggle').on('click', function() {
        if($('nav ul').css('display') == 'block') {
            $('nav ul').slideUp();
        } else {
            $('nav ul').slideDown();
        }
    });
});

/**
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41856239-1', 'wmich.edu');
ga('send', 'pageview');
