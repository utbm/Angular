import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeserviceService } from './services/leservice.service'
import { TheloggerService } from './services/thelogger.service';
import { EuroPipe } from './lespipes/euro.pipe';
import { PageListComponent } from './lespages/page-list/page-list.component';
import { PageCreationComponent } from './lespages/page-creation/page-creation.component';
import { PageVisualisationComponent } from './lespages/page-visualisation/page-visualisation.component';
import { PageHomeComponent } from './lespages/page-home/page-home.component'

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    PageListComponent,
    PageCreationComponent,
    PageVisualisationComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LeserviceService, TheloggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
