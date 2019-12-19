import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Car, AirtableResponse } from '../interfaces';

@Component({
    selector: 'app-cardetails',
    templateUrl: './cardetails.component.html',
    styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

    details: Car;

    isLoaded = false;

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    async ngOnInit() {
        const car = this.route.snapshot.url[1].path;
        const carResponse = await this.dbService.getCar(car);
        this.details = this.dbService.getAirtableRecords(carResponse as AirtableResponse)[0];
    }

    get mechanical() {
        return [
            {name: 'Body and Frame', value: this.details.BodyFrame},
            {name: 'Suspension', value: this.details.Suspension},
            {name: 'Layout', value: this.details.Layout},
            {name: 'Rims', value: this.details.Rims},
            {name: 'Tires', value: this.details.Tires},
            {name: 'Weight with Driver', value: this.details.Weight}
        ];
    }

    get electrical() {
        return [
            {name: 'Battery', value: this.details.Battery},
            {name: 'Motors', value: this.details.Motors},
            {name: 'Solar Array Area', value: this.details.ArrayArea},
            {name: 'Solar Array Output', value: this.details.ArrayOutput},
            {name: 'Solar Cells', value: this.details.SolarCells},
            {name: 'Battery Weight', value: this.details.BatteryWeight},
            {name: 'Top Speed', value: this.details.TopSpeed},
            {name: 'Motor Peak Power', value: this.details.MotorPeak}
        ];
    }

}
