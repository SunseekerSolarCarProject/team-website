import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Header, Sponsor, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

    header: Header;
    current = true;

    sponsors: Sponsor[];
    pastSponsors: Sponsor[] = new Array();

    headerLoaded = false;
    sponsorsLoaded = false;

    tiers = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Individual', 'WMU Bronco', 'Solar Cell'];

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    async ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.current);
        });
        this.header = await this.dbService.getHeader('sponsors');
        const currentResponse = await this.dbService.getSponsors();
        this.sponsors = this.dbService.getAirtableRecords(currentResponse as AirtableResponse);
        console.log(this.sponsors);
        var pastResopnse = await this.dbService.getPastSponsors();
            this.pastSponsors = this.dbService.getAirtableRecords(pastResopnse as AirtableResponse);
            while ((pastResopnse as any).offset) {
                pastResopnse = await this.dbService.getPastSponsors((pastResopnse as any).offset);
                this.pastSponsors = [...this.pastSponsors, ...this.dbService.getAirtableRecords(pastResopnse as AirtableResponse)];
            }
    }

    changeTab(tab) {
        this.current = tab === 'current';
    }

    getTier(tier) {
        return this.sponsors.filter(s => {
            return s.Tier === tier;
        });
    }

    getPastTier(tier) {
        return this.pastSponsors.filter(p => {
            return p.Tier === tier;
        });
    }

}
