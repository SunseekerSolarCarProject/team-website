import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Meeting } from '../interfaces/meeting';
import { Member } from '../interfaces/member';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {

  constructor(
      private http: HttpClient
  ) { }

    async getMeetings() {
        return await firebase.firestore().collection('meetings').get();
    }

    async getMembers() {
        return await firebase.firestore().collection('members').get();
    }

    createMeeting(meeting: Meeting) {
        firebase.firestore().collection('meetings').doc().set(meeting);
    }

    updateMeeting(meeting: Meeting) {
        const id = meeting.id;
        delete meeting.id;
        firebase.firestore().collection('meetings').doc(id).set(meeting);
    }

    updateMember(member: Member) {
        const id = member.id;
        delete member.id;
        firebase.firestore().collection('members').doc(id).set(member);
    }



    getHomepage() {
        return firebase.database().ref('homepage');
    }

    // getMembers() {
    //     return firebase.database().ref('currentMembers').once('value');
    // }

    getCars() {
        return firebase.database().ref('cars').once('value');
    }

    getCarDetail(car) {
        return firebase.database().ref('cars/carDetails/' + car).once('value');
    }

    getAlumni() {
        return firebase.database().ref('alumni').once('value');
    }

    getAboutus() {
        return firebase.database().ref('aboutus');
    }

    getSponsors() {
        return firebase.database().ref('sponsors').once('value');
    }

    getBlog() {
        return firebase.database().ref('blog').orderByChild('date');
    }

    uploadMemberPhoto(image, filename) {
        return firebase.storage().ref('members/' + filename).put(image);
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

    getSpreadsheet() {
        this.http.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTElGtmetjGJtS2mk3IUe1R3Ugn7DGO9cilgf_9Cy68vxT5Uvqs3jlyO6RH50aTkCmxE7dyxA-B8Dyd/pub?gid=0&single=true')
        .subscribe(data => {
            console.log(data);
        });
    }

}

export const imagePath = 'assets/_images/';

export const snapshotToArray = snapshot => {
    const returnArr = [];
    snapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

