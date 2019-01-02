import { Component, OnInit } from '@angular/core';
import { AirInfo } from './models/air-info.model';
import { AirListApi } from './apis/air-list-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private api: AirListApi) {
  }

  airList: AirInfo[] = [];

  ngOnInit(): void {
    this.api.query().subscribe(items => {
      this.airList = items;
    });
  }
}
