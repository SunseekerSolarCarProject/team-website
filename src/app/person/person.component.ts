import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import { Member } from '../interfaces';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

    @Input() person: Member;
    @Input() profile: boolean;

    funny = false;

    inputBuffer = [];

    constructor(private renderer: Renderer2, private router: Router, public dbService: DatabaseService) { }

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
        return this.person.FunnyPic != null && this.funny;
    }

}
