import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ClassLevelEnum } from '../models/class-level.enum';
import { AirInfo } from '../models/air-info.model';

@Injectable({
  providedIn: 'root',
})
export class MyDbService implements InMemoryDbService {

  constructor() {
  }

  createDb(reqInfo?: RequestInfo): {} {
    return { airList };
  }
}

const airList: AirInfo[] = [
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
