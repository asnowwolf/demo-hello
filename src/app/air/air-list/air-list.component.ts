import { Component, OnInit } from '@angular/core';
import { AirInfo } from '../models/air-info.model';
import { AirListApi } from '../apis/air-list-api.service';

@Component({
  selector: 'app-air-list',
  templateUrl: './air-list.component.html',
  styleUrls: ['./air-list.component.scss'],
})
export class AirListComponent implements OnInit {

  constructor(private api: AirListApi) {
  }

  airList: AirInfo[];

  ngOnInit() {
    this.api.query().subscribe(items => {
      this.airList = items;
    });
  }

  remove(air: AirInfo): void {
    const index = this.airList.indexOf(air);
    this.airList = this.airList.slice(index, index + 1);
  }
}
