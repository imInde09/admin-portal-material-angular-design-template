import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoryComponent } from './admin/category/category.component';
import { ApplicationsComponent } from './admin/applications/applications.component';
import { PricingImportComponent } from './admin/pricing-import/pricing-import.component';
const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/category', component: CategoryComponent },
      { path: 'products/applications', component: ApplicationsComponent },
      { path: 'products/pricing-import', component: PricingImportComponent },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
