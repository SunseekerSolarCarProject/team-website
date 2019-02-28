import { Component, OnInit } from '@angular/core';
import { DatabaseService, snapshotToArray, imagePath } from '../database.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    homepage;
    loadedData = false;

    imagePath = imagePath;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dbService.getHomepage().on('value', resp => {
            this.homepage = resp.val();
            this.loadedData = true;
        });
    }

}
