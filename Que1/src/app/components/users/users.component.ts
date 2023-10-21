import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  UserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  user = {
    username: '',
    email: '',
    password: ''
  };
  isSubmitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit() {
    this.isSubmitted = true;
    this.user = {
      username: <string>this.UserForm.controls.username.value,
      email: <string>this.UserForm.controls.email.value,
      password: <string>this.UserForm.controls.password.value
    }
  }

}
