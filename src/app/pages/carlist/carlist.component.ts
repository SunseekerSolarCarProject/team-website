import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-carlist',
    templateUrl: './carlist.component.html',
    styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

    cars;

    constructor(private dbService: DatabaseService) { }

    async ngOnInit() {
        const response = await this.dbService.getCars();
        this.cars = response.val();
        this.cars.carlist = Object.values(this.cars.carlist);
    }

}
