import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CategoryComponent } from './category/category.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PricingImportComponent } from './pricing-import/pricing-import.component';

@NgModule({
  declarations: [
    ListComponent,ProductsComponent, CategoryComponent, ApplicationsComponent, PricingImportComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ProductsModule { }
