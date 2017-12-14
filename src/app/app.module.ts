import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeserviceService } from './services/leservice.service'
import { TheloggerService } from './services/thelogger.service';
import { EuroPipe } from './lespipes/euro.pipe';
import { PageListComponent } from './lespages/page-list/page-list.component';
import { PageCreationComponent } from './lespages/page-creation/page-creation.component';
import { PageVisualisationComponent } from './lespages/page-visualisation/page-visualisation.component';
import { PageHomeComponent } from './lespages/page-home/page-home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommServiceService } from './services/comm-service.service';
import { BoiteInfoComponent } from './boite-info/boite-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    PageListComponent,
    PageCreationComponent,
    PageVisualisationComponent,
    PageHomeComponent,
    BoiteInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LeserviceService, TheloggerService, CommServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
