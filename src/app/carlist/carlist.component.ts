import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Header, Car, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-carlist',
    templateUrl: './carlist.component.html',
    styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

    header: Header;
    cars: Car[];

    headerLoaded = false;
    carsLoaded = false;

    constructor(private dbService: DatabaseService) { }

    async ngOnInit() {
        this.header = await this.dbService.getHeader('cars');
        const carResponse = await this.dbService.getCars();
        this.cars = this.dbService.getAirtableRecords(carResponse as AirtableResponse);
    }

}
