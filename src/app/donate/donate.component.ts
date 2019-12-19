import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

    perks = [
        'Company name, link, logo, and description on the website',
        'Company Promotion on our social media',
        'Recieve a resume book',
        'Logo on car',
        'Logo on trailer',
        'Logo on t-shirt',
        'Company Visit'
    ];

    tiers = [
        ['', 'Welcome + blog + posts on social media', '', 'Largest', 'Back/Largest', 'Largest', ''], // diamond
        ['', 'Welcome + blog + 6 posts on social media', '', 'Large', 'Back/Large', '', ''], // platinum
        ['', 'Welcome + blog + 2 posts on social media', '', 'Medium', 'Side/Medium', null, null], // gold
        ['', 'Welcome + 6 posts on social media', '', 'Small', 'Side/Small', null, null], // silver
        ['', 'Welcome + 6 posts on social media', '', null, null, null, null], // bronze
    ];

    constructor() { }

    ngOnInit() {
    }

    donate() {
        const value = (<HTMLInputElement>document.getElementById('donation')).value;
        window.location.href = 'https://securelb.imodules.com/s/1428/gid2/index.aspx?sid=1428&gid=2&pgid=418&cid=1173&bledit=1&dids=158&amount=' + value;
    }

    generateTier(index: number): Array<string> {
        const items = [];
        this.tiers[index].forEach((i, indx) => {
            if (i != null) {
                if (i === '') {
                    items.push(`${this.perks[indx]}.`);
                }
                else {
                    items.push(`${this.perks[indx]} (${i}).`);
                }
            }
        });
        return items;
    }
}
