import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {

  constructor() { }
    getHomepage() {
        return firebase.database().ref('homepage');
    }

    getMembers() {
        return firebase.database().ref('currentMembers');
    }

    getCars() {
        return firebase.database().ref('cars');
    }

    getCarDetail(car) {
        return firebase.database().ref('cars/carDetails/' + car);
    }

    getAlumni() {
        return firebase.database().ref('alumni');
    }

    getAboutus() {
        return firebase.database().ref('aboutus');
    }

    getSponsors() {
        return firebase.database().ref('sponsors');
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

