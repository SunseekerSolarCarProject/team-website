<?php

use Maverick\Application,
    Maverick\Http\Response\Instruction\RedirectInstruction;

define('ROOT', dirname(__DIR__));

require(ROOT . '/vendor/autoload.php');

Application::setDebugLevel(Application::DEBUG_LEVEL_DEV);

$app = new Application();

// Define some services
$app->services->register('twig', function() {
    $loader = new Twig_Loader_Filesystem(ROOT . '/src/Sunseeker/views/');
    return new Twig_Environment($loader);
});

$app->services->replace('error.controller', function($mgr) {
    return new Sunseeker\Controller\ErrorController($mgr->get('twig'));
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
]);

// Add the current url to twig
$twig->addGlobal('current_page', $app->request->getUrn());

$app->router->match('*', '/', function() use ($twig) {
    return $twig->render('index.twig');
});

$app->router->get('/about-us', function() use ($twig) {
    return $twig->render('about.twig');
});

$app->router->get('/our-car', function() use ($twig) {
    return $twig->render('ourCar.twig');
});

// Redirects
$app->router->get('/gallery', function() {
    return RedirectInstruction::factory('https://www.flickr.com/photos/wmu-sunseeker/');
});

$app->router->get('/the-team', function() {
    return RedirectInstruction::factory('/about-us');
});

$app->router->get('/our-cars/2010', function() {
    return RedirectInstruction::factory('/our-car');
});

$app->finish();
