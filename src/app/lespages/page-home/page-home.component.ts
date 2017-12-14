import { Component, OnInit, ViewChild } from '@angular/core';
import { BoiteLoginComponent } from '../../boite-login/boite-login.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  @ViewChild('laboitelogin') laboitelogin: BoiteLoginComponent;

  constructor() {
  }
  
  ngOnInit() {
    this.laboitelogin.showDlg();
  }
}
