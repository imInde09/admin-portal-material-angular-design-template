import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customer/customer.module';
import { OrdersComponent } from './orders/orders.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewsComponent } from './news/news.component';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminComponent,
    OrdersComponent,
    QuotesComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,RouterModule,ProductsModule,CustomerModule
  ]
})
export class AdminModule { }
