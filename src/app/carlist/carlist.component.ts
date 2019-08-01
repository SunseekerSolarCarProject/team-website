import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Header, Car } from '../interfaces';

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

    ngOnInit() {
        this.dbService.getHeaders().subscribe(resp => {
            this.header = resp.find(h => {
                return h.fields.Page === 'cars';
            }).fields;
            this.headerLoaded = true;
        });
        this.dbService.getCars().subscribe(resp => {
            this.cars = resp.map(r => {
                return {id: r.id, ...r.fields};
            });
            this.carsLoaded = true;
        });
    }

}
