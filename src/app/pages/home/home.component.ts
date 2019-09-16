import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    homepage;
    loadedData = false;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dbService.getHomepage().on('value', resp => {
            this.homepage = resp.val();
            this.loadedData = true;
        });
        this.dbService.getSpreadsheet();
    }

}
