/**
 * requireJS config
 */
requirejs.config({
    baseUrl: siteUrl + '/js',
    paths: {
        jquery: siteUrl + '/js/lib/jquery/dist/jquery.min'
    },
    shim: {
    	slideshow: ['jquery'],
    	konami: ['jquery']
    }
});

/**
 * Require global scripts
 */
require(['mobileNav', 'analytics']);