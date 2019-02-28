import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, snapshotToArray, imagePath } from '../database.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {

    current = false;
    past = false;

    members;
    alumni;

    imagePath = imagePath;

    isLoaded = false;

    constructor(
        private route: ActivatedRoute,
        private dbService: DatabaseService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.members);
        });
        this.dbService.getMembers().on('value', resp => {
            this.members = resp.val();
            this.isLoaded = true;
            console.log(this.members);
        });

        this.dbService.getAlumni().on('value', resp => {
            this.alumni = resp.val();
        });
    }

    changeTab(tab) {
        switch (tab) {
            case 'current':
                this.current = true;
                this.past = false;
                break;
            case 'past':
                this.current = false;
                this.past = true;
                break;
        }
    }

}
