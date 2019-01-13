import { Component, OnInit } from '@angular/core';
import { MeetingTimes, HomeImage, HomeInfo, HomeLogo } from '../../_data/homepage';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    meetingTimes = MeetingTimes;
    image = HomeImage;
    info = HomeInfo;
    logo = HomeLogo;

    constructor() { }

    ngOnInit() {
    }

}
