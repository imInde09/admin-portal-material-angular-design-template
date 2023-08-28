import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent {
  constructor(private router: Router) { }
  goCustomer(){
    console.log("add category");
    this.router.navigate(['/admin/customer']);
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  customerDetails = {
    personalInfo: {
      email: '',
      customerInfo: '',
      name: '',
      customerType: '',
      phoneNo: null,
      discount: null,
      companyName: '',
      customerStatus: ''
    },
    addressInfo: {
      billingAdd1: '',
      shippingAdd1: '',
      billingAdd2: '',
      shippingAdd2: '',
      billingCity: '',
      shippingCity: '',
      billingState: '',
      shippingState: '',
      billingZip: null,
      shippingZip: null,
    },
    passwordInfo: {
      password: '',
      confirmPassword: ''
    }
  }
  addCustomer(){
    console.log("Customer Added");
    console.log(this.customerDetails);
    this.router.navigate(['/admin/customer']);
  }
  }