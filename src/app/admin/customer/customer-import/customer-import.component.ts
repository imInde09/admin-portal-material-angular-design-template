import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-import',
  templateUrl: './customer-import.component.html',
  styleUrls: ['./customer-import.component.css']
})
export class CustomerImportComponent {
  customerfile: any;
  customerImport(){
    console.log(this.customerfile);
  }
}
