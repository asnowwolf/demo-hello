import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassLevelPipe } from './pipes/class-level.pipe';
import { AirListComponent } from './air-list/air-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassLevelPipe,
    AirListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
