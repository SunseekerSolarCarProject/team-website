import { Component, OnInit } from '@angular/core';
import { Sponsors, PastSponsors, SponsorImage } from '../../_data/sponsors';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.component.html',
    styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

    sponsors = Sponsors;
    past = PastSponsors;
    current = true;
    image = SponsorImage;

    constructor( private route: ActivatedRoute) { }

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
    }

}
