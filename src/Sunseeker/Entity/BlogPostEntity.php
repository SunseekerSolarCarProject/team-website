<?php

namespace Sunseeker\Entity;

use DateTime;

/**
 * @Entity(repositoryClass="Sunseeker\Repository\BlogPostRepository")
 * @Table(name="blog_posts")
 */
class BlogPostEntity {
    /**
     * @Id  @Column(type="integer")
     * @GeneratedValue
     */
    private $id;

    /**
     * @Column(type="string")
     */
    private $title;

    /**
     * @Column(type="string")
     */
    private $contents;

    /**
     * @OneToOne(targetEntity="MemberEntity")
     * @JoinColumn(name="author",referencedColumnName="id")
     */
    private $author;

    /**
     * @Column(type="integer")
     */
    private $published = 0;

    /**
     * @Column(name="publish_date", type="datetime")
     */
    private $publishDate;

    /**
     * @Column(type="string")
     */
    private $format;

    public function getId() {
        return $this->id;
    }

    public function getTitle() {
        return $this->title;
    }

    public function setTitle($title) {
        $this->title = $title;
        return $this;
    }

    public function getIntro() {
        return trim(substr(strip_tags($this->contents), 0, 500));
    }

    public function getContents() {
        return $this->contents;
    }

    public function setContents($contents) {
        $this->contents = $contents;
        return $this;
    }

    public function getAuthor() {
        return $this->author;
    }

    public function setAuthor(MemberEntity $author) {
        $this->author = $author;
        return $this;
    }

    public function isPublished() {
        return $this->published == 1;
    }

    public function setPublished($published=true) {
        $this->published = $published ? 1 : 0;
        return $this;
    }

    public function getPublishDate() {
        return $this->publishDate;
    }

    public function setPublishDate(DateTime $date=null) {
        $this->publishDate = $date ?: new DateTime(null);
    }

    public function getFormat() {
        return $this->format;
    }

    public function setFormat($format) {
        $this->format;
        return $this;
    }
}
