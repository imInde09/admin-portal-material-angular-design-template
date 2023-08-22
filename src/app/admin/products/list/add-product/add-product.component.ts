import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  constructor(private router: Router) { }
  seeProducts() {
    console.log("see products");
    this.router.navigate(['/admin/products/lists']);
  }
  options: Option[] = [];

  addRow() {
    this.options.push({ name: '', price: 0, discountedPrice: 0 });
  }

  removeRow(index: number) {
    this.options.splice(index, 1);
  }
}
interface Option {
  name: string;
  price: number;
  discountedPrice: number;
}