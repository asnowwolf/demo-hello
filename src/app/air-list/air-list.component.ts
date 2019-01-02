import { Component, Input, OnInit } from '@angular/core';
import { AirInfo } from '../models/air-info.model';

@Component({
  selector: 'app-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.scss'],
})
export class AirListComponent implements OnInit {

  constructor() {
  }

  @Input()
  airList: AirInfo[];

  ngOnInit() {
  }

  remove(air: AirInfo): void {
    const index = this.airList.indexOf(air);
    this.airList = this.airList.slice(index, index + 1);
  }
}
