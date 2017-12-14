import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  userForm: FormGroup; //le formulaire
  usernamectrl: FormControl; // gestion du nom
  passwordctrl: FormControl; // gestion du password

  constructor(private _fb: FormBuilder) {
    //creation du gestionnaire de nom
    this.usernamectrl = _fb.control('', [Validators.required]);
    this.passwordctrl = _fb.control('', [Validators.required]);

    //creation du groupe
    this.userForm = _fb.group({
      username: this.usernamectrl,
      password: this.passwordctrl
    });
  }

  ngOnInit() {

  }

  traitementForm() {
    console.log("Name: " + this.userForm.value.username);
    console.log("Password: " + this.userForm.value.password);
  }

}
