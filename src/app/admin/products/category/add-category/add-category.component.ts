import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private router: Router) {
    
  }
  goCategory(){
    console.log("go category");
    this.router.navigate(['/admin/products/category']);
  }
}
