import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {

    current = false;
    past = false;

    members;
    alumni;

    constructor(
        private route: ActivatedRoute,
        private dbService: DatabaseService
    ) { }

    async ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.members);
        });

        const memberResponse = await this.dbService.getMembers();
        // this.members = memberResponse.val();
        // this.members.currentMembers.members = Object.values(this.members.currentMembers.members);
        // this.members.currentMembers.advisors = Object.values(this.members.currentMembers.advisors);

        const alumniResponse = await this.dbService.getAlumni();
        this.alumni = alumniResponse.val();
        this.alumni.alumni = Object.values(this.alumni.alumni);
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
    }

}
