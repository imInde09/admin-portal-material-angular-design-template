import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'name', 'slug','price','actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // input: any;
  constructor(private router: Router) {
    // Create 100 users
    const users = Array.from({length: 30}, (_, k) => createNewUser(k + 1));

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
  addProducts(){
    console.log("add category");
    this.router.navigate(['/admin/products/lists/add-products']);
  }
}
export interface UserData {
  id: string;
  name: string;
  slug: string;
  price: number;
}

/** Constants used to fill up our data base. */
const SLUG: string[] = [
  'laser-wristbands',
  'thermal-wristbands',
  'sheild-wristbands',
  'industrial-label-printers','mobile-printers','scanner'
];
const STATUS: string[] = [
  'active','inactive'
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
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
    name: name,
    slug: SLUG[Math.round(Math.random() * (SLUG.length - 1))],
    price: Math.round(Math.random() * 100)
  };
}