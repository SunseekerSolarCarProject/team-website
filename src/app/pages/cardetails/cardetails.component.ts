import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
    selector: 'app-cardetails',
    templateUrl: './cardetails.component.html',
    styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

    details;

    constructor( private route: ActivatedRoute, private dbService: DatabaseService) { }

    async ngOnInit() {
        const car = this.route.snapshot.url[1].path.replace(' ', '');
        const response = await this.dbService.getCarDetail(car);
        this.details = response.val();
        this.details.electrical = Object.values(this.details.electrical);
        this.details.mechanical = Object.values(this.details.mechanical);
    }

}
