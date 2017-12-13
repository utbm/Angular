import { Component, OnInit } from '@angular/core';
import { LeserviceService } from './services/leservice.service'

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

  // injection du service LeserviceService
  constructor(private _calculette: LeserviceService) {
    // attention cycle de vie de la class et du component 
    this.populateLetabelau();
    console.log("creation de la class AppComponent");
  }

  private populateLetabelau(): void {
    this.letableau = ['Test', "Test2"];
  }

  laFonctionClickBt() {
    console.log("hehe le bnt est click");
    console.log(this._calculette.plus(10, 20));

    // Le bouton relance le timer
    this.ngOnInit();
  }

  ngOnInit(): void {
    console.log("ngOnInit valeur du token = " + this.timerToken);

    this.timerToken = setInterval(() => {
      console.log("setInterval valeur du token = " + this.timerToken);
      this.letableau.push(new Date().toISOString());
    }, 1000);
  }

  stopTimer(): void {
    console.log("stopTimer valeur du token = " + this.timerToken);
    if (this.timerToken) {
      clearTimeout(this.timerToken);
      this.timerToken = null;
    }
  }
}
