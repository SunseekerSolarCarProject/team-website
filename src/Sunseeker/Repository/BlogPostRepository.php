<?php

namespace Sunseeker\Repository;

use Doctrine\ORM\EntityRepository;

class BlogPostRepository extends EntityRepository {
    public function findPublished() {
        $em    = $this->getEntityManager();
        $query = $em->createQuery('SELECT bp FROM Sunseeker\Entity\BlogPostEntity bp WHERE bp.published = :published ORDER BY bp.publishDate DESC');

        $query->setParameter('published', '1');

        return $query->getResult();
    }
}
