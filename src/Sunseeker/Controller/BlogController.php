<?php

namespace Sunseeker\Controller;

use Twig_Environment;

class BlogController {
    private $twig;

    public function __construct(Twig_Environment $twig) {
        $this->twig = $twig;
    }

    public function indexAction() {
        return $this->twig->render('blog/index.twig');
    }
}
