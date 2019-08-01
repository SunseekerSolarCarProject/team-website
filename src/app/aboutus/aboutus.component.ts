import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Header, AboutUs } from '../interfaces';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

    headers: Header[];
    currentTab = 'history';

    aboutus: AboutUs[];

    headerLoaded = false;
    aboutusLoaded = false;

    constructor(private route: ActivatedRoute, private dbService: DatabaseService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentTab = params.page;
            this.dbService.getAboutus().subscribe(resp => {
                this.aboutus = resp.map(r => r.fields);
                this.aboutusLoaded = true;
            });
        });
        this.dbService.getHeaders().subscribe(resp => {
            this.headers = resp.map(h =>  h.fields);
            this.headerLoaded = true;
        });
    }

    changeTab(tab) {
        this.currentTab = tab;
    }

    get currentHeader() {
        return this.headers.find(h => h.Page === this.currentTab);
    }

    get currentInfo() {
        switch (this.currentTab) {
            case 'challenge':
                return [
                    this.aboutus.find(a => a.Tab === 'asc'),
                    this.aboutus.find(a => a.Tab === 'wsc')
                ];
            case 'history':
                return [
                    this.aboutus.find(a => a.Tab === 'history')
                ];
            case 'mission':
                return [
                    this.aboutus.find(a => a.Tab === 'mission')
                ];
        }
    }

}
