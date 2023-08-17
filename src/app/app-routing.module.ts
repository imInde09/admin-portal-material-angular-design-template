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
const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products', component: ProductsComponent, children: [
          { path: 'category', component: CategoryComponent },
          { path: 'applications', component: ApplicationsComponent },
          { path: 'pricing-import', component: PricingImportComponent },
          { path: 'lists', component: ListComponent },
          { path: '', redirectTo: '/admin/products/lists', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
