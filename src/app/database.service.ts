import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Airtable, Base } from 'ngx-airtable';

@Injectable()
export class DatabaseService {

    base: Base;

    constructor(private airtable: Airtable) { }

    getBase() {
        this.base = this.airtable.base('appi09iP9sn2pprfV');
    }

    getHeaders() {
        return this.base.table({ tableName: 'Headers' }).select().firstPage();
    }

    getMeetingTimes() {
        return this.base.table({ tableName: 'Meeting Times'}).select().firstPage();
    }

    getMembers() {
        return this.base.table({ tableName: 'Members'}).select({filterByFormula: 'Current'}).firstPage();
    }

    getAlumni() {
        return this.base.table({ tableName: 'Members'}).select({filterByFormula: 'NOT(Current)'}).eachPage();
    }

    getMember(name) {
        return this.base.table({ tableName: 'Members'}).find(name);
    }

    getAboutus() {
        return this.base.table({ tableName: 'AboutUs'}).select().firstPage();
    }

    getCars() {
        return this.base.table({ tableName: 'Cars'}).select().firstPage();
    }

    getCar(car) {
        return this.base.table({ tableName: 'Cars'}).find(car);
    }

    getSponsors() {
        return this.base.table({ tableName: 'Sponsors'}).select({filterByFormula: 'Current'}).firstPage();
    }

    getPastSponsors() {
        return this.base.table({ tableName: 'Sponsors'}).select({filterByFormula: 'NOT(Current)'}).eachPage();
    }

    getImage(pic) {
        if (pic) {
            return pic[0].url;
        }
    }



    getBlog() {
        return firebase.database().ref('blog').orderByChild('date');
    }

    postBlog(title, body, author) {
        const date = new Date();
        const postDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        firebase.database().ref('blog').push().set({
            title: title,
            date: postDate,
            body: body,
            author: author
        });
    }

    getCells() {
        return firebase.database().ref('adoptacell');
    }

}

