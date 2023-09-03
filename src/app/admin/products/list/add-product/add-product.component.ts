import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  productDetails = {
    general: {
      name: '',
      slug: '',
      price: null,
      discountedPrice: null,
      productsku: '',
      vendor: 'default',
      category: '1',
      status: 'active',
      topparts: true,
      topproductorder: '',
      description: '',
      image: '',
    },
    description: '',
    products:'1',
    industry: '1',
  }
  general(){
    console.log("general");
    console.log(this.productDetails.general);
  }
  option(){
    console.log("option");
    console.log(this.options);
  }
  longDescription(){
    console.log("long description");
    console.log(this.productDetails.description);
  }
  relatedProduts(){
    console.log("related products");
    console.log(this.productDetails.products);
  }
  industry(){
    console.log("industry");
    console.log(this.productDetails.industry);
  }
}
interface Option {
  name: string;
  price: number;
  discountedPrice: number;
}