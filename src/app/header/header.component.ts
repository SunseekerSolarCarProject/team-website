import { Component, Input, OnInit } from '@angular/core';
import { Header } from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: Header;
  @Input() isPc: boolean;

  constructor() { }

  ngOnInit() {
  }

}
