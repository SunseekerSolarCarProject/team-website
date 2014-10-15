<?php

namespace Sunseeker\Entity;

/**
 * @Entity(repositoryClass="Sunseeker\Repository\MemberRepository")
 * @Table(name="members")
 */
class MemberEntity {
    /**
     * @Id  @Column(type="integer")
     * @GeneratedValue
     */
    private $id;

    /**
     * @Column(name="first_name",type="string")
     */
    private $firstName;

    /**
     * @Column(name="last_name",type="string")
     */
    private $lastName;

    /**
     * @Column(name="email",type="string")
     */
    private $email;

    /**
     * @Column(name="password_md5",type="string")
     */
    private $passwordMd5;

    /**
     * @Column(name="password_salt",type="string")
     */
    private $passwordSalt;

    /**
     * @Column(name="level",type="integer")
     */
    private $level = 0;

    /**
     * @Column(name="position",type="string")
     */
    private $position;

    /**
     * @Column(name="major",type="string")
     */
    private $major;

    /**
     * @Column(name="picture",type="string",nullable=true)
     */
    private $picture;

    /**
     * @Column(name="linkedin_url",type="string")
     */
    private $linkedIn;

    /**
     * @Column(name="hidden",type="string")
     */
    private $hidden;

    public function getId() {
        return $this->id;
    }

    public function getFirstName() {
        return $this->firstName;
    }

    public function setFirstName($name) {
        $this->firstName = $name;
        return $this;
    }

    public function getLastName() {
        return $this->lastName;
    }

    public function setLastName($name) {
        $this->lastName = $name;
        return $this;
    }

    public function getFullName() {
        return $this->firstName . ' ' . $this->lastName;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getPasswordMd5() {
        return $this->passwordMd5;
    }

    public function setPasswordMd5($md5) {
        $this->passwordMd5 = $md5;
        return $this;
    }

    public function getPasswordSalt() {
        return $this->passwordSalt;
    }

    public function setPasswordSalt($salt) {
        $this->passwordSalt = $salt;
        return $this;
    }

    public function getLevel() {
        return $this->level;
    }

    public function setLevel($level) {
        $this->level = $level;
        return $this;
    }

    public function getPosition() {
        return $this->position;
    }

    public function setPosition($position) {
        $this->position = $position;
        return $this;
    }

    public function getMajor() {
        return $this->major;
    }

    public function setMajor($major) {
        $this->major = $major;
        return $this;
    }

    public function getPicture() {
        return $this->picture;
    }

    public function setPicture($picture) {
        $this->picture = $picture;
        return $this;
    }

    public function getLinkedIn() {
        return $this->linkedIn;
    }

    public function setLinkedIn($linkedIn) {
        $this->linkedIn = $linkedIn;
        return $this;
    }

    public function isHidden() {
        return $this->hidden === 1;
    }

    public function setHidden($hidden=true) {
        $this->hidden = $hidden ? 1 : 0;
        return $this;
    }
}
