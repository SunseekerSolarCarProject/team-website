import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Header, MeetingTime } from '../interfaces';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    header: Header;
    meetingTimes: MeetingTime[];
    loadedData = false;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dbService.getHeaders().subscribe(resp => {
            this.header = resp.find(h => {
                return h.fields.Page === 'home';
            }).fields;
            this.loadedData = true;
        });

        this.dbService.getMeetingTimes().subscribe(resp => {
            this.meetingTimes = resp.map(r => {
                return r.fields;
            });
        });
    }

    getMeeting(team) {
        return this.meetingTimes.find(r => {
            return r.Team === team;
        });
    }

}
