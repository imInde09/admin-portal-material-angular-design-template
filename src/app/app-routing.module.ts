import { AddProductComponent } from './admin/products/list/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoryComponent } from './admin/products/category/category.component';
import { ApplicationsComponent } from './admin/products/applications/applications.component';
import { PricingImportComponent } from './admin/products/pricing-import/pricing-import.component';
import { ListComponent } from './admin/products/list/list.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ListsComponent } from './admin/customer/lists/lists.component';
import { CustomerTypesComponent } from './admin/customer/customer-types/customer-types.component';
import { CustomerImportComponent } from './admin/customer/customer-import/customer-import.component';
import { CustomerPriceImportComponent } from './admin/customer/customer-price-import/customer-price-import.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { QuotesComponent } from './admin/quotes/quotes.component';
import { NewsComponent } from './admin/news/news.component';
import { AddCategoryComponent } from './admin/products/category/add-category/add-category.component';
import { AddNewsComponent } from './admin/news/add-news/add-news.component';
import { OrderDetailsComponent } from './admin/orders/order-details/order-details.component';
import { AddCustomerComponent } from './admin/customer/lists/add-customer/add-customer.component';
import { ProfileComponent } from './admin/profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products', component: ProductsComponent, children: [
          { path: 'category', component: CategoryComponent},
          { path: 'applications', component: ApplicationsComponent },
          { path: 'pricing-import', component: PricingImportComponent },
          { path: 'lists', component: ListComponent },
          {path: 'category/add-category', component: AddCategoryComponent},
          {path: 'lists/add-products',component: AddProductComponent},
          { path: '', redirectTo: '/admin/products/lists', pathMatch: 'full' }
        ]
      },
      {
        path:  'customer', component: CustomerComponent, children:[
          {path: 'lists', component: ListsComponent},
          {path: 'add', component: AddCustomerComponent},
          {path: 'customer-types', component: CustomerTypesComponent},
          {path: 'customer-import',component: CustomerImportComponent},
          {path: 'customer-price-import',component: CustomerPriceImportComponent},
          { path: '', redirectTo: '/admin/customer/lists', pathMatch: 'full' }
        ]
      },
      {path:'orders',component: OrdersComponent},
      {path: 'orders/orderdetails/:id',component: OrderDetailsComponent},
      {path:'quotes',component: QuotesComponent},
      {path:'news',component: NewsComponent},
      {path: 'news/add-news', component: AddNewsComponent},
      {path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
