import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingServiceService } from 'src/app/billing-service.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  id: any;
  billingAddress: any;
  shippingAddress: any;
  constructor(private route: ActivatedRoute,private billingService: BillingServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const index = parseInt(this.id, 10);
    const addressData = this.billingService.getAddressByIndex(index-1);

    if (addressData) {
      this.billingAddress = addressData.billing;
      this.shippingAddress = addressData.shipping;
    } else {
      console.log('Address not found.');
    }
    console.log(this.id);
  }
  selectedInvoiceType: string = 'upload';

  submitForm() {
    if (this.selectedInvoiceType === 'upload') {
      // Logic for handling file upload
      const fileInput: HTMLInputElement | null = document.querySelector('#uploadFile');
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const uploadedFile = fileInput.files[0];
        console.log('Uploading file:', uploadedFile.name);
        // Add your file upload logic here
      } else {
        console.log('No file selected.');
      }
    } else if (this.selectedInvoiceType === 'generate') {
      console.log('Generating invoice automatically.');
      // Add your logic for automatic invoice generation here
    }
  }
}
