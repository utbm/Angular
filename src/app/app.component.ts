import { Component, OnInit } from '@angular/core';
import { LeserviceService } from './services/leservice.service'
import { TheloggerService } from './services/thelogger.service'

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
              private _thelogger: TheloggerService) {
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
}
