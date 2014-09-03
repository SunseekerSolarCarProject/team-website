<?php

use Maverick\Application;

define('ROOT', dirname(__DIR__));

require(ROOT . '/vendor/autoload.php');

Application::setDebugLevel(Application::DEBUG_LEVEL_DEV);

$app = new Application();

// Define some services
$app->services->register('twig', function() {
    $loader = new Twig_Loader_Filesystem(ROOT . '/src/Sunseeker/views/');
    return new Twig_Environment($loader);
});

$app->start();

// Create an "alias" for the twig service to be "used" by closures.
$twig = $app->services->get('twig');

// Add the URL prefix to the twig environment
$twig->addGlobal('url_prefix', Application::debugCompare('<', Application::DEBUG_LEVEL_PROD) ? '/' : '/sunseeker/');

$app->router->match('*', '/', function() use ($twig) {
    return $twig->render('index.twig');
});

$app->finish();