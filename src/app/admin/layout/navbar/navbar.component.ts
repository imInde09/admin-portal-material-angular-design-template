import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }
  goProfile(){
    this.router.navigate(['/admin/profile']);
  }
  logout(){
    this.router.navigate(['/signin']);
  }
  showFiller = false;
  panelOpenState = false;
}
