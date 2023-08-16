import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
const routes: Routes = [
  { path: '',   redirectTo: '/admin/dashboard', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
  {path: 'admin',component: AdminComponent, children:[
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductsComponent},
    {path: '',   redirectTo: '/admin/dashboard', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
