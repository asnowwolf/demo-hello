import { Component } from '@angular/core';
import { AirInfo } from './models/air-info.model';
import { ClassLevelEnum } from './models/class-level.enum';

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
}
