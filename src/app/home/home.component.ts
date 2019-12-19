import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Header, MeetingTime, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    header: Header;
    meetingTimes: MeetingTime[];

    constructor(private dbService: DatabaseService) { }

    get isPc() {
        return window.innerWidth > 750;
    }

    async ngOnInit() {
        this.header = await this.dbService.getHeader('home');

        const meetings = await this.dbService.getMeetingTimes();
        this.meetingTimes = this.dbService.getAirtableRecords(meetings as AirtableResponse);
    }

    getMeeting(team) {
        return this.meetingTimes.find(r => {
            return r.Team === team;
        });
    }

}
