import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'name', 'details','actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // input: any;
  constructor() {
    // Create 100 users
    const users = Array.from({length: 1}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onedit(item:any){
    console.log(item.id+" "+item.name+" "+item.details+" "+item.parent_category+" "+item.status);
  }
  ondelete(){
    console.log("delete");
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  vendorDetails={
    name: '',
    details: ''
  }
  vendorType(){
    console.log("Form Submitted")
    console.log(this.vendorDetails);
  }
}
export interface UserData {
  id: string;
  name: string;
  details: string;
}

/** Constants used to fill up our data base. */
const DETAILS: string[] = [
  'Default Vendor: Cancard',
];
const NAMES: string[] = [
  'Cancard',
];
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: NAMES[id-1],
    details: DETAILS[id-1],
  };
}