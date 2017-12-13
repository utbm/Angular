import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LeserviceService } from './services/leservice.service'
import { TheloggerService } from './services/thelogger.service';
import { EuroPipe } from './lespipes/euro.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LeserviceService, TheloggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
