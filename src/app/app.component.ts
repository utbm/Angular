import { Component, OnInit } from '@angular/core';
import { LeserviceService } from './services/leservice.service'
import { TheloggerService } from './services/thelogger.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  letableauX: Array<any> = [{ name: 'sdfsdf' }, { name: 'zerzerzsdf' }];
  letableau: String[];
  timerToken: any;
  montant: number = -123.214151;

  // injection du service LeserviceService
  constructor(private _calculette: LeserviceService,
    private _thelogger: TheloggerService,
    private _router: Router) {
    // attention cycle de vie de la class et du component 
    this.populateLetabelau();
    this._thelogger.debug("creation de la class AppComponent");
  }

  private populateLetabelau(): void {
    this.letableau = ['Test', "Test2"];
  }

  laFonctionClickBt() {
    this._thelogger.debug("hehe le bnt est click");
    this._thelogger.debug("" + this._calculette.plus(10, 20));

    // Le bouton relance le timer
    this.ngOnInit();
  }

  ngOnInit(): void {
    this._thelogger.debug("ngOnInit valeur du token = " + this.timerToken);

    this.timerToken = setInterval(() => {
      this._thelogger.debug("setInterval valeur du token = " + this.timerToken);
      this.letableau.push(new Date().toISOString());
    }, 1000);
  }

  stopTimer(): void {
    this._thelogger.debug("stopTimer valeur du token = " + this.timerToken);
    if (this.timerToken) {
      clearTimeout(this.timerToken);
      this.timerToken = null;
    }
  }

  goHome(): void {
    this._thelogger.debug("goHome !!!");
    this._router.navigate(['']);
  }

  goList(): void {
    this._thelogger.debug("goList !!!");
    this._router.navigate(['list']);
  }

  goView(): void {
    this._thelogger.debug("goView !!!");
    this._router.navigate(['view']);
  }

  goCreate(): void {
    this._thelogger.debug("goCreate !!!");
    this._router.navigate(['create']);
  }
}
