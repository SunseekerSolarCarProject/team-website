require.config({
    baseUrl: 'assets/javascript',
    paths: {
        jquery: 'lib/jquery-1.11.1'
    },
    shim: {
        'app/slideshow': {
            deps: ['jquery']
        },
        'app/lightbox': {
            deps: ['jquery']
        }
    }
});
