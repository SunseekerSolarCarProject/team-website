<?php

namespace Sunseeker\Controller;

use Twig_Environment,
    Sunseeker\Repository\MemberRepository;

class TeamController {
    private $twig;
    private $memberRepo;

    public function __construct(Twig_Environment $twig, MemberRepository $members) {
        $this->twig       = $twig;
        $this->memberRepo = $members;
    }

    public function aboutAction() {
        return $this->twig->render('team/about.twig');
    }

    public function meetAction() {
        $members = $this->memberRepo->findMembersForDisplay() ?: [];

        return $this->twig->render('team/meet.twig', ['members' => $members]);
    }
}
