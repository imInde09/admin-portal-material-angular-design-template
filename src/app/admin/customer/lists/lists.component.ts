import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent  implements AfterViewInit  {
  displayedColumns: string[] = [ 'name','email','phone','customerNo', 'companyName','lastOrderDate','status','actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
    console.log(item.customerNo+item.name+item.lastOrderDate+item.progress+item.item);
  }
  ondelete(){
    console.log("delete");
  }
  addCustomer(){
    console.log("add category");
    this.router.navigate(['/admin/customer/add']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface UserData {
  customerNo: string;
  name: string;
  email: string;
  phone: number;
  lastOrderDate: string;
  progress: string;
  companyName: string;
  status: string;
}

/** Constants used to fill up our data base. */
const ITEMS: string[] = [
  'Galore Creek Mining Corporation',
  'Norgren New Matics',
  'FIO Automottive Canada'
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
];
const EMAILS: string[] = [
  'Maia@cancard.com',
  'Asher@cancard.com',
  'Olivia@cancard.com',
  'Atticus@cancard.com',
  'Amelia@cancard.com',
  'Jack@cancard.com',
  'Charlotte@cancard.com'
];
const PHONES: number[] = [
  1234567890,
  1234567895,
  1234567832,
  1234567425,
];
/** Builds and returns a new User. */
function createNewUser(customerNo: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    customerNo: customerNo.toString(),
    name: name,
    email: EMAILS[Math.round(Math.random() * (EMAILS.length - 1))],
    phone: PHONES[Math.round(Math.random() * (PHONES.length - 1))],
    lastOrderDate: Date.now().toString(),
    progress: Math.round(Math.random() * 100).toString(),
    companyName: ITEMS[Math.round(Math.random() * (ITEMS.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
  };
}