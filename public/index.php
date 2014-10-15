<?php

use Maverick\Application,
    Maverick\Http\Response\Instruction\RedirectInstruction;

define('ROOT', dirname(__DIR__) . '/');

require(ROOT . '/vendor/autoload.php');

Application::setDebugLevel(Application::DEBUG_LEVEL_DEV);

$app = new Application();

/*
 * Define services
 */
$app->services->register('twig', function($mgr) {
    $loader = new Twig_Loader_Filesystem(ROOT . '/src/Sunseeker/views/');
    $twig   = new Twig_Environment($loader);

    $generateUrnFunc = new Twig_SimpleFunction('generateUrn', function($urn, $params) use ($mgr) {
        return $mgr->get('router')->generateUrn($urn, $params);
    });

    $twig->addFunction($generateUrnFunc);

    return $twig;
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
 * Define repositories as services
 */
$app->services->register('member.repo', function($mgr) {
    return $mgr->get('doctrine')->getRepository('Sunseeker\Entity\MemberEntity');
});

$app->services->register('blogpost.repo', function($mgr) {
    return $mgr->get('doctrine')->getRepository('Sunseeker\Entity\BlogPostEntity');
});

/*
 * Define controllers as services
 */
if(Application::debugCompare('>', Application::DEBUG_LEVEL_DEV)) {
    $app->services->replace('error.controller', function($mgr) {
        return new Sunseeker\Controller\ErrorController($mgr->get('twig'));
    });
}

$app->services->register('blog.controller', function($mgr) {
    return new Sunseeker\Controller\BlogController($mgr->get('twig'), $mgr->get('blogpost.repo'));
});

$app->services->register('team.controller', function($mgr) {
    return new Sunseeker\Controller\TeamController($mgr->get('twig'), $mgr->get('member.repo'));
});

$app->start();

// Create an "alias" for the twig service to be "used" by closures.
$twig = $app->services->get('twig');

// Add the URL prefix to the twig environment
$twig->addGlobal('url_prefix', Application::debugCompare('<', Application::DEBUG_LEVEL_PROD) ? '' : '/sunseeker');

// Add the nav links
$navLinks = [
    '/sunseeker'               => 'Home',
    '/sunseeker/about-us'      => 'About Us',
    '/sunseeker/meet-the-team' => 'The Team',
    '/sunseeker/our-car'       => 'Our Car',
    '/sunseeker/our-sponsors'  => 'Sponsors',
    '/sunseeker/blog'          => 'Team Blog'
];

$activeLink = '';

foreach($navLinks as $urn => $label) {
    if(strpos($app->request->getUrn(), $urn) === 0) {
        $activeLink = $urn;
    }
}

$twig->addGlobal('nav_links', $navLinks);
$twig->addGlobal('active_link', $activeLink);

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

$app->router->get('/sunseeker/meet-the-team', 'team.controller->meetAction');
$app->router->get('/sunseeker/about-us', 'team.controller->aboutAction');

$app->router->get('/sunseeker/our-car', function() use ($twig) {
    return $twig->render('ourCar.twig');
});

$app->router->get('/sunseeker/our-sponsors', function() use ($twig) {
    return $twig->render('sponsors/current.twig');
});

$app->router->get('/sunseeker/past-sponsors', function() use ($twig) {
    return $twig->render('sponsors/past.twig');
});

$app->router->get('/sunseeker/donate', function() use ($twig) {
    return $twig->render('sponsors/donate.twig');
});

$app->router->get('/sunseeker/blog', 'blog.controller->indexAction');
$app->router->get('/sunseeker/blog/page/{#([0-9]+)#}', 'blog.controller->indexAction', ['name' => 'blogPage']);
$app->router->get('/sunseeker/blog/post/{#([0-9]+)#}', 'blog.controller->viewPostAction', ['name' => 'blogPost']);

/*
 * Redirects
 */
$app->router->get('/sunseeker/gallery', function() {
    return RedirectInstruction::factory('https://www.flickr.com/photos/wmu-sunseeker/');
});

$app->router->get('/sunseeker/the-team', function() {
    return RedirectInstruction::factory('/sunseeker/about-us');
});

$app->router->get('/sunseeker/the-team/members', function() {
    return RedirectInstruction::factory('/sunseeker/meet-the-team');
});

$app->router->get('/sunseeker/become-a-sponsor', function() {
    return RedirectInstruction::factory('/sunseeker/donate');
});

$app->router->get('/sunseeker/our-cars/2010', function() {
    return RedirectInstruction::factory('/sunseeker/our-car');
});

$app->finish();
