import { Component, OnInit, Renderer2 } from '@angular/core';
import { CurrentMembers, CurrentHeaderImage, CurrentPageTitle } from '../../_data/current-members';
import { ActivatedRoute } from '@angular/router';
import { Alumni, NotPictured, AlumniHeaderImage, AlumniPageTitle } from '../../_data/alumni';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})


export class TeamComponent implements OnInit {

    current = false;
    past = false;

    currentMembers = CurrentMembers;
    alumni = Alumni;
    notPictured = NotPictured;
    currentImage = CurrentHeaderImage;
    alumniImage = AlumniHeaderImage;
    currentTitle = CurrentPageTitle;
    alumniTitle = AlumniPageTitle;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.changeTab(params.members);
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
    }

}
