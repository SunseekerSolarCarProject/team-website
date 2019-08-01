import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Header, Sponsor } from '../interfaces';

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

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.current);
        });
        this.dbService.getHeaders().subscribe(resp => {
            this.header = resp.find(h => {
                return h.fields.Page === 'sponsors';
            }).fields;
            this.headerLoaded = true;
        });
        this.dbService.getSponsors().subscribe(resp => {
            this.sponsors = resp.map(s => s.fields);
        });
        this.dbService.getPastSponsors().subscribe(resp => {
            const past = resp.map(s => {
                return {id: s.id, ...s.fields};
            }).filter(r => {
                return this.pastSponsors.filter(a => a.id === r.id).length === 0;
            });
            this.pastSponsors = [...this.pastSponsors, ...past];
            this.sponsorsLoaded = true;
        });
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
