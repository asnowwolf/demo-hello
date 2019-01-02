import { Pipe, PipeTransform } from '@angular/core';
import { ClassLevelEnum } from '../models/class-level.enum';

@Pipe({
  name: 'classLevel',
})
export class ClassLevelPipe implements PipeTransform {

  transform(level: ClassLevelEnum): string {
    const levelMap = {
      A: '头等舱',
      C: '经济舱',
    };
    return levelMap[level];
  }

}
