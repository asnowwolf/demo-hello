import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirRoutingModule } from './air-routing.module';
import { AirListComponent } from './air-list/air-list.component';
import { ClassLevelPipe } from './pipes/class-level.pipe';

@NgModule({
  declarations: [
    AirListComponent,
    ClassLevelPipe,
  ],
  imports: [
    CommonModule,
    AirRoutingModule,
  ],
})
export class AirModule {
}
