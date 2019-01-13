import { Component, OnInit } from '@angular/core';
import { Carlist, CarImage } from '../../_data/cars';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

  carlist = Carlist;
  image = CarImage;

  constructor() { }

  ngOnInit() {
  }

}
