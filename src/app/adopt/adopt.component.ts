import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
    selector: 'app-adopt',
    templateUrl: './adopt.component.html',
    styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {

    front = new Array(108);
    back = new Array(108);

    isLoaded = false;

    constructor(private dbService: DatabaseService) { }

    ngOnInit() {
        this.dbService.getCells().on('value', resp => {
            const val = resp.val();
            this.front = val.front;
            this.back = val.back;
            this.isLoaded = true;
        });
    }

}
