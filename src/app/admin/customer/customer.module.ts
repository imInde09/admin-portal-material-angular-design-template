import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ListsComponent } from './lists/lists.component';
import { CustomerTypesComponent } from './customer-types/customer-types.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';
import { CustomerPriceImportComponent } from './customer-price-import/customer-price-import.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    CustomerComponent,
    ListsComponent,
    CustomerTypesComponent,
    CustomerImportComponent,
    CustomerPriceImportComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class CustomerModule { }
