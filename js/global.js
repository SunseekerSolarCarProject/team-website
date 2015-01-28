/**
 * requireJS config
 */
requirejs.config({
    baseUrl: siteUrl + '/js',
    paths: {
        jquery: siteUrl + '/js/lib/bower/jquery/dist/jquery.min'
    }
});

/**
 * Require global scripts
 */
require(['mobileNav', 'analytics']);