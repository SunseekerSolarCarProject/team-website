import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Config } from '../../interfaces/config';
import { Meeting } from '../../interfaces/meeting';
import { DatabaseService } from '../../services/database.service';
import { Member } from '../../interfaces/member';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    tabs = ['Meetings', 'Members', 'Sponsors', 'Cars'];

    currentTab = 1;

    meetings: Meeting[] = [];
    members: Member[] = [];

    meetingConfig: Config[] = [
        {
            id: 'title',
            type: 'text'
        },
        {
            id: 'day',
            type: 'text',
        },
        {
            id: 'building',
            type: 'text',
        },
        {
            id: 'room',
            type: 'text',
        },
        {
            id: 'time',
            type: 'time',
        }
    ];

    memberConfig: Config[] = [
        {
            id: 'image',
            type: 'image'
        },
        {
            id: 'name',
            type: 'text'
        },
        {
            id: 'title',
            type: 'text'
        },
        {
            id: 'linkedin',
            type: 'url'
        }
    ];

    constructor(
        private fb: FormBuilder,
        private dbService: DatabaseService,
    ) { }

    ngOnInit() {
        this.getMeetings();
        this.getMembers();
    }

    tabClicked(index: number) {
        this.currentTab = index;
    }

    async getMeetings() {
        this.meetings = [];
        const meetingResult = await this.dbService.getMeetings();
        meetingResult.forEach(meeting => this.meetings.push({id: meeting.id, ...meeting.data()} as Meeting));
        this.meetings.push({} as Meeting);
    }

    editMeeting(meeting) {
        const today = new Date();
        const time = meeting.time.split(':');
        meeting.time = new Date(today.getFullYear(), today.getMonth(), today.getDay(), parseInt(time[0], 10), parseInt(time[1], 10));
        this.dbService.updateMeeting(meeting);
        this.getMeetings();
    }

    createMeeting(meeting) {
        const today = new Date();
        const time = meeting.time.split(':');
        meeting.time = new Date(today.getFullYear(), today.getMonth(), today.getDay(), parseInt(time[0], 10), parseInt(time[1], 10));
        this.dbService.createMeeting(meeting);
        this.getMeetings();
    }

    async getMembers() {
        this.members = [];
        const memberResult = await this.dbService.getMembers();
        memberResult.forEach(member => this.members.push({id: member.id, ...member.data()} as Member));
    }

    saveMember(member) {
        const upload = this.dbService.uploadMemberPhoto(member.image, member.image.name);
        upload.on('state_changed',
        snapshot => {
            console.log('Loading');
        },
        error => {
            console.log(error);
        },
        () => {
            upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
                member.image = downloadURL;
                this.dbService.updateMember(member);
                this.getMembers();
            });
        });
    }

}
