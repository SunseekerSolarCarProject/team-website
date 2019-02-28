import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, imagePath } from '../database.service';

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

    current = true;

    sponsorInfo;

    imagePath = imagePath;

    isLoaded;

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.current);
        });
    }

    changeTab(tab) {
        switch (tab) {
            case 'current':
                this.current = true;
                break;
            case 'past':
                this.current = false;
                break;
        }
        this.dbService.getSponsors().on('value', resp => {
            this.sponsorInfo = resp.val();
            this.isLoaded = true;
        });
    }

}
