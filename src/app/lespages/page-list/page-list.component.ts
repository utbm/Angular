import { Component, OnInit, ViewChild } from '@angular/core';
import { CommServiceService } from '../../services/comm-service.service';
import { BoiteInfoComponent } from '../../boite-info/boite-info.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  tabUsers: any[];

  @ViewChild('laboite') laboite: BoiteInfoComponent;

  constructor(private _commServiceService: CommServiceService) {
  }

  ngOnInit() {
    this._commServiceService.getUsers().subscribe((tab: any[]) => {
      this.tabUsers = tab;
    }, (err) => {
      console.log(err);
      this.laboite.showDlg(err);
    });
  }

  querryShow() {
    this.laboite.showDlg('info test');
  }

}
