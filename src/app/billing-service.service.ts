import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor() { }
  billingAdd: any[] = [
    {
      name: 'Gautam Modak',
      street: '37 Ontario St',
      city: 'St Catharines',
      postalCode: 'L2N 1S8',
      country: 'Canada',
      email: 'gmodak@cancard.com'
    }
  ];
  shippingAdd: any[] = [
    {
      name: 'Gautam Modak',
      street: '37 Ontario St',
      city: 'St Catharines',
      postalCode: 'L2N 1S8',
      country: 'Canada',
      email: 'gmodak@cancard.com'
    }
  ];

  getBillingAddress() {
    return this.billingAdd[0];
  }
  getShippingAddress() {
    return this.shippingAdd[0];
  }
}
