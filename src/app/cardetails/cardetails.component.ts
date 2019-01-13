import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from '../../_data/cars';

@Component({
    selector: 'app-cardetails',
    templateUrl: './cardetails.component.html',
    styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

    details: any;

    constructor( private route: ActivatedRoute) { }

    ngOnInit() {
        this.details = CarDetails[this.route.snapshot.url[1].path.replace(' ', '')];
    }

}
