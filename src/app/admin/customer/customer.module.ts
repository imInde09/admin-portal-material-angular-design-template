import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ListsComponent } from './lists/lists.component';
import { CustomerTypesComponent } from './customer-types/customer-types.component';
import { CustomerImportComponent } from './customer-import/customer-import.component';
import { CustomerPriceImportComponent } from './customer-price-import/customer-price-import.component';
import { RouterModule, Routes } from '@angular/router';
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
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    ListsComponent,
    CustomerTypesComponent,
    CustomerImportComponent,
    CustomerPriceImportComponent
  ],
  imports: [
    CommonModule,RouterModule,MatIconModule,MatButtonModule,MatToolbarModule,MatSidenavModule,NgIf,MatListModule,MatExpansionModule,
    MatTableModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,MatMenuModule,QuillModule,MatTabsModule,FormsModule
  ]
})
export class CustomerModule { }
