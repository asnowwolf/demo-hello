import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirRoutingModule } from './air-routing.module';
import { AirListComponent } from './air-list/air-list.component';
import { ClassLevelPipe } from './pipes/class-level.pipe';
import { StatComponent } from './stat/stat.component';
import { ChartDirective } from './directives/chart.directive';

@NgModule({
  declarations: [
    AirListComponent,
    ClassLevelPipe,
    StatComponent,
    ChartDirective,
  ],
  imports: [
    CommonModule,
    AirRoutingModule,
  ],
})
export class AirModule {
}
