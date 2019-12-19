import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Member, Header, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {

    header: Header;

    current = false;
    past = false;

    members: Member[];
    alumni: Member[] = new Array();

    headerLoaded = false;
    membersLoaded = false;

    constructor(
        private route: ActivatedRoute,
        private dbService: DatabaseService
    ) { }

    async ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.members);
        });

        this.header = await this.dbService.getHeader(this.currentTab);

        if (this.current) {
            const memberResponse = await this.dbService.getMembers();
            this.members = this.dbService.getAirtableRecords(memberResponse as AirtableResponse);
        }

        if (this.past) {
            var memberResponse = await this.dbService.getAlumni();
            this.alumni = this.dbService.getAirtableRecords(memberResponse as AirtableResponse);
            while ((memberResponse as any).offset) {
                memberResponse = await this.dbService.getAlumni((memberResponse as any).offset);
                this.alumni = [...this.alumni, ...this.dbService.getAirtableRecords(memberResponse as AirtableResponse)];
            }
        }
    }

    getPosition(title) {
        return this.members.find(r => {
            return r.Position === title;
        });
    }

    getMembers() {
        return this.members.filter(r => {
            return this.isNotEBoar(r.Position) && r.Current;
        }).sort((a, b) => {
            const la = this.getLastName(a.Name);
            const lb = this.getLastName(b.Name);
            if (la > lb) {
                return 1;
            }
            return -1;
        });
    }

    isNotEBoar(position) {
        if (
            position === 'President' ||
            position === 'Director of Operations' ||
            position === 'Director of Business' ||
            position === 'Director of Engineering' ||
            position === 'Webmaster' ||
            position === 'Mechanical Lead' ||
            position === 'Electrical Lead' ||
            position === 'Advisor' ||
            position === 'Aero Lead' ||
            position === 'Driver Lead'
        ){
            return false;
        }
        return true;
    }

    getAdvisors() {
        return this.members.filter(r => {
            return r.Title === 'Advisor';
        });
    }

    getAlumni() {
        return this.alumni.filter(r => {
            return r.Picture;
        }).sort((a, b) => {
            const la = this.getLastName(a.Name);
            const lb = this.getLastName(b.Name);
            if (la > lb) {
                return 1;
            }
            return -1;
        });
    }

    getNotPictured() {
        return this.alumni.filter(r => {
            return !r.Picture;
        }).sort((a, b) => {
            const la = this.getLastName(a.Name);
            const lb = this.getLastName(b.Name);
            if (la > lb) {
                return 1;
            }
            return -1;
        }).map(r => {
            return r.Name;
        });
    }

    async changeTab(tab) {
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
        this.header = await this.dbService.getHeader(this.currentTab);
    }

    getSeperator(index, total) {
        if (index === total - 1) {
            return '';
        }
        return ', ';
    }

    getLastName(name) {
        if (name) {
            return name.split(' ')[1];
        }
        return '';
    }

    get currentTab() {
        if (this.current) {
            return 'current';
        }
        else if (this.past) {
            return 'alumni';
        }
    }

}
