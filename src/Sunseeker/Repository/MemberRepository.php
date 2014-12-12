<?php

namespace Sunseeker\Repository;

use Doctrine\ORM\EntityRepository;

class MemberRepository extends EntityRepository {
    public function findMembersForDisplay() {
        $em    = $this->getEntityManager();
        $query = $em->createQuery('SELECT m FROM Sunseeker\Entity\MemberEntity m WHERE m.picture IS NOT NULL AND m.hidden != :hidden ORDER BY m.lastName ASC');

        $query->setParameter('hidden', '1');

        return $query->getResult();
    }
}
