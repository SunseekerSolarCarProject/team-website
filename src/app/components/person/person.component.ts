import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

    @Input() person: Person;

    funny = false;

    inputBuffer = [];

    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.listen('document', 'keypress', e => {
            this.inputBuffer.push(e.key);
            const inputString = this.inputBuffer.join('');
            if (inputString.includes('solar')) {
                this.inputBuffer = [];
                this.funny = true;
                window.setTimeout(() => {
                    this.funny = false;
                }, 5000);
            }
        });
    }

    get isFunnyPic() {
        return this.person.funnyPic != null && this.funny;
    }

}

interface Person {
    picture: string;
    name: string;
    title: string;
    linkedin: string;
    funnyPic: string;
}
