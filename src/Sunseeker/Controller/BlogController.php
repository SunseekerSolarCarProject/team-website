<?php

namespace Sunseeker\Controller;

use Twig_Environment,
    Sunseeker\Repository\BlogPostRepository;

class BlogController {
    private $twig;
    private $blogPosts;

    public function __construct(Twig_Environment $twig, BlogPostRepository $blogPosts) {
        $this->twig      = $twig;
        $this->blogPosts = $blogPosts;
    }

    public function indexAction() {
        $posts = $this->blogPosts->findPublished();

        return $this->twig->render('blog/main.twig', ['posts' => $posts]);
    }
}
