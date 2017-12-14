import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boite-info',
  templateUrl: './boite-info.component.html',
  styleUrls: ['./boite-info.component.css']
})
export class BoiteInfoComponent implements OnInit {
  closeResult: string;

  @ViewChild('content') innerTemplate;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  showDlg() {
    this.modalService.open(this.innerTemplate).result.then(
      (result) => {
        console.log("OK");
      }, (code) => {
        console.log("KO");
      }
    );
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
