<?php

namespace Sunseeker\Repository;

use Doctrine\ORM\EntityRepository,
    Doctrine\ORM\Tools\Pagination\Paginator;

class BlogPostRepository extends EntityRepository {
    public function findPublished($max, $page=1) {
        $em    = $this->getEntityManager();
        $query = $em->createQuery('SELECT bp FROM Sunseeker\Entity\BlogPostEntity bp WHERE bp.published = :published ORDER BY bp.publishDate DESC');

        $query->setParameter('published', '1')
            ->setFirstResult(($page - 1) * 10)
            ->setMaxResults($max);

        $paginator = new Paginator($query);

        return $paginator;
    }
}
