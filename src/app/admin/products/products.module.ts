import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CategoryComponent } from './category/category.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PricingImportComponent } from './pricing-import/pricing-import.component';
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
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { QuillModule } from 'ngx-quill';
import { AddProductComponent } from './list/add-product/add-product.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListComponent,ProductsComponent, CategoryComponent, ApplicationsComponent, PricingImportComponent, AddCategoryComponent, AddProductComponent
  ],
  imports: [
    CommonModule,RouterModule,MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,NgIf,MatListModule,MatExpansionModule,
    MatTableModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,MatMenuModule,QuillModule,MatTabsModule,FormsModule
  ]
})
export class ProductsModule { }
