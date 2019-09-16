import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-donate',
    templateUrl: './donate.component.html',
    styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    donate() {
        const value = (<HTMLInputElement>document.getElementById('donation')).value;
        window.location.href = 'https://securelb.imodules.com/s/1428/gid2/index.aspx?sid=1428&gid=2&pgid=418&cid=1173&bledit=1&dids=158&amount=' + value;
    }
}
