import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, imagePath } from '../database.service';

@Component({
    selector: 'app-cardetails',
    templateUrl: './cardetails.component.html',
    styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

    details;

    imagePath = imagePath;

    isLoaded = false;

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    ngOnInit() {
        const car = this.route.snapshot.url[1].path.replace(' ', '');
        this.dbService.getCarDetail(car).on('value', resp => {
            this.details = resp.val();
            this.isLoaded = true;
        });
    }

}
