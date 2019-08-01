import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Member, Header } from '../interfaces';

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

        this.dbService.getHeaders().subscribe(resp => {
            this.header = resp.find(h => {
                return h.fields.Page === this.currentTab;
            }).fields;
            this.headerLoaded = true;
        });

        await this.dbService.getMembers().subscribe(resp => {
            this.members = resp.map(r => {
                return {id: r.id, ...r.fields};
            });
        });
        await this.dbService.getAlumni().subscribe(resp => {
            const alum = resp.map(r => {
                return {id: r.id, ...r.fields};
            }).filter(r => {
                return this.alumni.filter(a => a.id === r.id).length === 0;
            });
            this.alumni = [...this.alumni, ...alum];
            this.membersLoaded = true;
        });
    }

    getPosition(title) {
        return this.members.find(r => {
            return r.Title === title;
        });
    }

    getMembers() {
        return this.members.filter(r => {
            return !r.EBoard && r.Current;
        }).sort((a, b) => {
            const la = this.getLastName(a.Name);
            const lb = this.getLastName(b.Name);
            if (la > lb) {
                return 1;
            }
            return -1;
        });
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

    changeTab(tab) {
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
        this.dbService.getHeaders().subscribe(resp => {
            this.header = resp.find(h => {
                return h.fields.Page === this.currentTab;
            }).fields;
        });
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
