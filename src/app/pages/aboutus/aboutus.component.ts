import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

    history = false;
    challenge = false;
    mission = false;

    aboutus;

    isLoaded = false;

    constructor(private route: ActivatedRoute, private dbService: DatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.page);
        });
    }

    changeTab(tab) {
        switch (tab) {
            case 'history':
                this.history = true;
                this.challenge = false;
                this.mission = false;
                break;
            case 'challenge':
                this.history = false;
                this.challenge = true;
                this.mission = false;
                break;
            case 'mission':
                this.history = false;
                this.challenge = false;
                this.mission = true;
                break;
        }
        this.dbService.getAboutus().on('value', resp => {
            this.aboutus = resp.val();
            this.isLoaded = true;
        });
    }

}
