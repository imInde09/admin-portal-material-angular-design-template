import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './login/signin/signin.component';
const routes: Routes = [
  { path: '',   redirectTo: '/signin', pathMatch: 'full' },
  {path: 'signin', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
