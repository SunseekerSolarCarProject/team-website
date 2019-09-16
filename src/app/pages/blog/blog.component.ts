import { Component, OnInit, Renderer2 } from '@angular/core';
import { DatabaseService, snapshotToArray } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    blogPosts;

    isLoaded = false;

    inputBuffer = [];

    title = '';
    body = '';
    author = '';

    constructor(private dbService: DatabaseService, private renderer: Renderer2, private router: Router) { }

    ngOnInit() {
        this.dbService.getBlog().on('value', resp => {
            this.blogPosts = snapshotToArray(resp);
            this.blogPosts = this.flipArray(this.blogPosts);
            this.isLoaded = true;
        });
        this.renderer.listen('document', 'keypress', e => {
            this.inputBuffer.push(e.key);
            const inputString = this.inputBuffer.join('');
            if (inputString.includes('edit')) {
                this.inputBuffer = [];
                const password = prompt('Enter the password');
                if (password === 'WMUSolar2019') {
                    document.getElementById('editButton').click();
                }
            }
        });
    }

    flipArray(array) {
        const newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    post() {
        this.dbService.postBlog(this.title, this.body, this.author);
    }

}
