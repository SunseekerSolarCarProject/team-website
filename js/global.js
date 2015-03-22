/**
 * requireJS config
 */
requirejs.config({
    baseUrl: siteUrl + '/js',
    paths: {
        jquery: siteUrl + '/js/lib/bower/jquery/dist/jquery.min'
    },
    shim: {
    	slideshow: ['jquery']
    }
});

/**
 * Require global scripts
 */
require(['mobileNav', 'analytics']);