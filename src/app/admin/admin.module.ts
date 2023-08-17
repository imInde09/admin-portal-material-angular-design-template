import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,RouterModule,ProductsModule
  ]
})
export class AdminModule { }
