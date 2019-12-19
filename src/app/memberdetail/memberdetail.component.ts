import { Component, OnInit, Renderer2 } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Member, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-memberdetail',
    templateUrl: './memberdetail.component.html',
    styleUrls: ['./memberdetail.component.scss']
})
export class MemberdetailComponent implements OnInit {

    person: Member;

    isLoaded = false;

    inputBuffer = [];

    funny = false;

    constructor(
        private dbService: DatabaseService,
        private route: ActivatedRoute,
        private renderer: Renderer2
    ) { }

    async ngOnInit() {
        let path;
        this.route.params.subscribe(params => {
            path = params.path;
        });
        const memberResponse = await this.dbService.getMember(path);
        this.person = this.dbService.getAirtableRecords(memberResponse as AirtableResponse)[0];
        console.log(this.person);

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

    get firstName() {
        return this.person.Name.split(' ')[0];
    }

    get isFunnyPic() {
        return this.person.FunnyPic != null && this.funny;
    }

}
