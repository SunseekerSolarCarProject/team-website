import { Component, OnInit } from '@angular/core';
import { DatabaseService, imagePath } from '../database.service';

@Component({
    selector: 'app-carlist',
    templateUrl: './carlist.component.html',
    styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

    cars;

    imagePath = imagePath;

    isLoaded = false;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dbService.getCars().on('value', resp => {
            this.cars = resp.val();
            this.isLoaded = true;
        });
    }

}
