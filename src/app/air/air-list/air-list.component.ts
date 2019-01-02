import { Component, OnInit } from '@angular/core';
import { AirInfo } from '../models/air-info.model';
import { AirListApi } from '../apis/air-list-api.service';
import { map, tap } from 'rxjs/operators';
import { ClassLevelEnum } from '../models/class-level.enum';

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
    this.reload();
  }

  private reload() {
    this.api.query().pipe(
      map(items => [...items, {
        id: 3,
        name: 'c',
        num: 'HU10003',
        level: ClassLevelEnum.C,
      }]),
    ).subscribe(items => {
      this.airList = items;
    });
  }

  remove(air: AirInfo): void {
    this.api.remove(air.id).pipe(
      tap(() => this.reload()),
    ).subscribe();
  }
}
