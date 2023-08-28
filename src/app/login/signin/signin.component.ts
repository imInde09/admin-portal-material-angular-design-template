import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  constructor( private router: Router) {}
  formData = {
    email: '',
    password: '',
    remember: false
  };

  onSubmit() {
    console.log(this.formData);
    this.router.navigate(['/admin/dashboard']);
  }
}
