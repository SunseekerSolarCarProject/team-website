import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Airtable, Base } from 'ngx-airtable';
import { HttpClient } from '@angular/common/http';
import { AirtableResponse, Header } from './interfaces';

@Injectable()
export class DatabaseService {

    base: Base;
    headers: Header[];

    constructor(private http: HttpClient) { }

    getAirtableRecords(response: AirtableResponse) {
        return response.records.map(record => record.fields);
    }

    async getHeaders() {
        const headerResponse = await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/headers?api_key=keyWQOwc7ZNY12T0o').toPromise();
        this.headers = this.getAirtableRecords(headerResponse as AirtableResponse);
    }

    async getAllHeaders() {
        if (!this.headers) {
            await this.getHeaders();
        }
        return this.headers;
    }

    async getHeader(page: string) {
        if (!this.headers) {
            await this.getHeaders();
        }
        return this.headers.find(header => header.Page === page);
    }

    async getMeetingTimes() {
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/meetings?api_key=keyWQOwc7ZNY12T0o').toPromise();
    }

    async getMembers() {
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/members?api_key=keyWQOwc7ZNY12T0o&filterByFormula=Current').toPromise();
    }

    async getAlumni(offset?: string) {
        if (offset) {
            return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/members?api_key=keyWQOwc7ZNY12T0o&filterByFormula=NOT(Current)&offset='+offset).toPromise();
        }
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/members?api_key=keyWQOwc7ZNY12T0o&filterByFormula=NOT(Current)').toPromise();
    }

    async getMember(name) {
        return await this.http.get(`https://api.airtable.com/v0/appi09iP9sn2pprfV/members?api_key=keyWQOwc7ZNY12T0o&filterByFormula=Name="${name}"`).toPromise();

    }

    async getAboutus() {
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/aboutus?api_key=keyWQOwc7ZNY12T0o').toPromise();
    }

    async getCars() {
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/cars?api_key=keyWQOwc7ZNY12T0o').toPromise();
    }

    async getCar(car) {
        return await this.http.get(`https://api.airtable.com/v0/appi09iP9sn2pprfV/cars?api_key=keyWQOwc7ZNY12T0o&filterByFormula=Car="${car}"`).toPromise();

    }

    async getSponsors() {
        // return this.base.table({ tableName: 'Sponsors'}).select({filterByFormula: 'Current'}).firstPage();
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/sponsors?api_key=keyWQOwc7ZNY12T0o&filterByFormula=Current').toPromise();

    }

    async getPastSponsors(offset?: string) {
        if (offset) {
            return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/sponsors?api_key=keyWQOwc7ZNY12T0o&filterByFormula=NOT(Current)&offset='+offset).toPromise();
        }
        return await this.http.get('https://api.airtable.com/v0/appi09iP9sn2pprfV/sponsors?api_key=keyWQOwc7ZNY12T0o&filterByFormula=NOT(Current)').toPromise();
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

