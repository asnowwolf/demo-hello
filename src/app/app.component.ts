import { Component } from '@angular/core';
import { ClassLevelEnum } from './models/class-level.enum';
import { AirInfo } from './models/air-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  airList: AirInfo[] = [
    {
      id: 1,
      name: '张三',
      num: 'HU1001',
      level: ClassLevelEnum.C,
    },
    {
      id: 2,
      name: '李四',
      num: 'HU1002',
      level: ClassLevelEnum.A,
    },
  ];

  remove(air: AirInfo): void {
    const index = this.airList.indexOf(air);
    this.airList = this.airList.slice(index, index + 1);
  }
}
