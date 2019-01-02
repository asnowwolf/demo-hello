import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirListComponent } from './air-list/air-list.component';

const routes: Routes = [
  {
    path: '',
    component: AirListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirRoutingModule {
}
