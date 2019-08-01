import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { DatabaseService } from './database.service';

const config = {
  apiKey: 'AIzaSyBNtkFlzzd0nCSxsYtKM1v1-c_wgYrLXIo',
  authDomain: 'sunseekerwebsite.firebaseapp.com',
  databaseURL: 'https://sunseekerwebsite.firebaseio.com',
  projectId: 'sunseekerwebsite',
  storageBucket: 'sunseekerwebsite.appspot.com',
  messagingSenderId: '109730839360'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WMU Sunseeker';
  constructor(private databaseService: DatabaseService) {
    localStorage.removeItem('firebase:previous_websocket_failure');
    firebase.initializeApp(config);
    this.databaseService.getBase();
  }
}
