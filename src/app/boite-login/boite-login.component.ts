import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-boite-login',
  templateUrl: './boite-login.component.html',
  styleUrls: ['./boite-login.component.css']
})
export class BoiteLoginComponent implements OnInit {

  userForm: FormGroup; //le formulaire
  usernamectrl: FormControl; // gestion du nom
  passwordctrl: FormControl; // gestion du password

  constructor(private _fb: FormBuilder,
    private modalService: NgbModal) {
    //creation du gestionnaire de nom
    this.usernamectrl = _fb.control('', [Validators.required]);
    this.passwordctrl = _fb.control('', [Validators.required]);

    //creation du groupe
    this.userForm = _fb.group({
      username: this.usernamectrl,
      password: this.passwordctrl,
    });
  }

  @ViewChild('content') innerTemplate;

  ngOnInit() {

  }

  traitementForm() {
    console.log("Name: " + this.userForm.value.username);
    console.log("Password: " + this.userForm.value.password);
  }

  showDlg() {
    setTimeout(1);
    this.modalService.open(this.innerTemplate);
  }
}
