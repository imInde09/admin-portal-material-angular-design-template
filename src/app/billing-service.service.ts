import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor() { }
  addresses: any[] = [
    {
      billing: {
        label: 'Billing Address',
        name: 'Gautam Modak',
        street: '37 Ontario St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'Canada',
        email: 'gmodak@cancard.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'John Doe',
        street: '123 Shipping St',
        city: 'Shipping City',
        postalCode: '12345',
        country: 'USA',
        email: 'john@example.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'Nitesh Mathur',
        street: '37 Ontario St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'Canada',
        email: 'nmathur@cancard.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'John Doe',
        street: '123 Shipping St',
        city: 'Shipping City',
        postalCode: '12345',
        country: 'USA',
        email: 'john@example.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'Nitesh Mathur',
        street: '37 Ontario St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'Canada',
        email: 'nmathur@cancard.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'John Doe',
        street: '123 Shipping St',
        city: 'Shipping City',
        postalCode: '12345',
        country: 'USA',
        email: 'john@example.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'Nitesh Mathur',
        street: '37 Ontario St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'Canada',
        email: 'nmathur@cancard.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'John Deere',
        street: '123 Shipping St',
        city: 'Shipping City',
        postalCode: '12345',
        country: 'USA',
        email: 'john@example.com'
      }
    },
    // Add more address entries as needed
  ];

  getAddressByIndex(index: number) {
    if (index >= 0 && index < this.addresses.length) {
      return this.addresses[index];
    } else {
      return null; // Handle the case when the index is out of bounds
    }
  }
}
