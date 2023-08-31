import { NgModule } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule, MatListItem, MatListItemLine} from '@angular/material/list';
import {MatList} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import { QuillModule } from 'ngx-quill';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quotes/quote-details/quote-details.component';
import { VendorComponent } from './vendor/vendor.component';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminComponent,
    OrdersComponent,
    QuotesComponent,
    NewsComponent,
    AddNewsComponent,
    OrderDetailsComponent,
    ProfileComponent,
    QuoteDetailsComponent,
    VendorComponent
  ],
  imports: [
    CommonModule,RouterModule,ProductsModule,CustomerModule,
    MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,NgIf,MatListModule,MatExpansionModule,
    MatTableModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,MatMenuModule,QuillModule,FormsModule
  ]
})
export class AdminModule { }
