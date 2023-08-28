import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-import',
  templateUrl: './pricing-import.component.html',
  styleUrls: ['./pricing-import.component.css']
})
export class PricingImportComponent {
  pricing_file: any;
  pricingImport(){
    console.log(this.pricing_file);
  }
}
