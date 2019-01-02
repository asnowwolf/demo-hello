import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassLevelPipe } from './pipes/class-level.pipe';
import { AirListComponent } from './air-list/air-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MyDbService } from './mocks/my-db.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassLevelPipe,
    AirListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MyDbService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
