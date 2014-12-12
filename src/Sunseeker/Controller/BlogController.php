<?php

namespace Sunseeker\Controller;

use Twig_Environment,
    Sunseeker\Repository\BlogPostRepository,
    Maverick\Http\Response\Instruction\ErrorInstruction;

class BlogController {
    private $twig;
    private $blogPosts;

    public function __construct(Twig_Environment $twig, BlogPostRepository $blogPosts) {
        $this->twig      = $twig;
        $this->blogPosts = $blogPosts;
    }

    public function indexAction($page=1) {
        $max   = 10;
        $posts = $this->blogPosts->findPublished($max, $page);
        $count = count($posts);
        $pages = ceil($count / $max);

        if($page < 1) {
            $page = 1;
        } elseif($page > $pages) {
            $page = $pages;
        }

        return $this->twig->render('blog/main.twig', ['posts' => $posts, 'page' => $page, 'pages' => $pages]);
    }

    public function viewPostAction($id) {
        $post = $this->blogPosts->findOneById($id);

        if(!$post) {
            return ErrorInstruction::factory(404);
        }

        return $this->twig->render('blog/post.twig', ['post' => $post]);
    }
}
