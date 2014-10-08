<?php

use Maverick\Application,
    Maverick\Http\Response\Instruction\RedirectInstruction;

define('ROOT', dirname(__DIR__));

require(ROOT . '/vendor/autoload.php');

Application::setDebugLevel(Application::DEBUG_LEVEL_DEV);

$app = new Application();

/*
 * Define services
 */
$app->services->register('twig', function() {
    $loader = new Twig_Loader_Filesystem(ROOT . '/src/Sunseeker/views/');
    return new Twig_Environment($loader);
});

$app->services->register('doctrine', function() {
    $config = new \Doctrine\ORM\Configuration();

    if(Application::debugCompare('<', Application::DEBUG_LEVEL_PROD)) {
        $cache = new Doctrine\Common\Cache\ArrayCache();
    } else {
        $cache = new Doctrine\Common\Cache\ApcCache();
    }

    $config->setMetadataCacheImpl($cache);
    $config->setMetadataDriverImpl($config->newDefaultAnnotationDriver(ROOT . 'src/Sunseeker/Entity'));
    $config->setQueryCacheImpl($cache);
    $config->setProxyDir(ROOT . 'src/Sunseeker/Proxy');
    $config->setProxyNamespace('Sunseeker\Proxy');

    if(Application::debugCompare('<', Application::DEBUG_LEVEL_PROD)) {
        $config->setAutoGenerateProxyClasses(true);
    } else {
        $config->setAutoGenerateProxyClasses(false);
    }

    return \Doctrine\ORM\EntityManager::create(Application::getConfig('database')->dump(), $config);
});

/*
 * Define controllers as services
 */
$app->services->replace('error.controller', function($mgr) {
    return new Sunseeker\Controller\ErrorController($mgr->get('twig'));
});

$app->services->register('blog.controller', function($mgr) {
    return new Sunseeker\Controller\BlogController($mgr->get('twig'));
});

$app->start();

// Create an "alias" for the twig service to be "used" by closures.
$twig = $app->services->get('twig');

// Add the URL prefix to the twig environment
$twig->addGlobal('url_prefix', Application::debugCompare('<', Application::DEBUG_LEVEL_PROD) ? '' : '/sunseeker');

// Add the nav links
$twig->addGlobal('nav_links', [
    '/'             => 'Home',
    '/about-us'     => 'About Us',
    '/our-car'      => 'Our Car',
    '/our-sponsors' => 'Sponsors',
    '/donate'       => 'Donate',
    '/blog'         => 'Team Blog'
]);

/*
 * Tell Twig where we are
 */
$twig->addGlobal('current_page', $app->request->getUrn());

/*
 * Define the routes
 */
$app->router->match('*', '/sunseeker', function() use ($twig) {
    return $twig->render('index.twig');
});

$app->router->get('/sunseeker/about-us', function() use ($twig) {
    return $twig->render('about.twig');
});

$app->router->get('/sunseeker/our-car', function() use ($twig) {
    return $twig->render('ourCar.twig');
});

$app->router->get('/sunseeker/blog', 'blog.controller->indexAction');

/*
 * Redirects
 */
$app->router->get('/sunseeker/gallery', function() {
    return RedirectInstruction::factory('https://www.flickr.com/photos/wmu-sunseeker/');
});

$app->router->get('/sunseeker/the-team', function() {
    return RedirectInstruction::factory('/about-us');
});

$app->router->get('/sunseeker/our-cars/2010', function() {
    return RedirectInstruction::factory('/our-car');
});

$app->finish();
