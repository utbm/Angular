import { Component, OnInit } from '@angular/core';
import { CommServiceService } from '../../services/comm-service.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  tabUsers: any[];

  constructor(private _commServiceService: CommServiceService) {
  }

  ngOnInit() {
    this._commServiceService.getUsers().subscribe((tab: any[]) => {
      this.tabUsers = tab;
    }, err => console.log(err));
  }

}
