import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

    current = true;

    sponsorInfo;

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.current);
        });
    }

    async changeTab(tab) {
        switch (tab) {
            case 'current':
                this.current = true;
                break;
            case 'past':
                this.current = false;
                break;
        }
        const response = await this.dbService.getSponsors();
        this.sponsorInfo = response.val();
        Object.keys(this.sponsorInfo.sponsors).forEach(key => {
            this.sponsorInfo.sponsors[key] = Object.values(this.sponsorInfo.sponsors[key]);
        });
    }

}
