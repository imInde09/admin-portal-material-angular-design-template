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
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      }
    },
    {
      billing: {
        label: 'Billing Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
      },
      shipping: {
        label: 'Shipping Address',
        name: 'jon doe',
        street: '123 Main St',
        city: 'St Catharines',
        postalCode: 'L2N 1S8',
        country: 'USA',
        email: 'jondoe@jon.com'
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
