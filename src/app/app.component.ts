import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  title = 'app';
  letableauX: Array<any> = [{ name: 'sdfsdf' }, { name: 'zerzerzsdf' }];
  letableau: String[];
  
  constructor() {
    // attention cycle de vie de la class et du component 
    this.populateLetabelau();
    console.log("creation de la class AppComponent");
  }
  
  private populateLetabelau(): void {
    this.letableau = ['sdf', "sdf2"];
  }
  
  laFonctionClickBt() {
    console.log("hehe le bnt est click");
  }
  
  ngOnInit(): void {
    console.log("ngOnInit de la class AppComponent");
    // throw new Error("Method not implemented.");
  }
}
