import {AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'name', 'details','status','actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // input: any;
  constructor(private router: Router) {
    // Create 100 users
    const users = Array.from({length: 5}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onedit(item:any){
    console.log(item.id+" "+item.name+" "+item.details+" "+item.status);
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
  addNews(){
    console.log("add category");
    this.router.navigate(['/admin/news/add-news']);
  }
}
export interface UserData {
  id: string;
  name: string;
  details: string;
  status: string;
}

/** Constants used to fill up our data base. */
const DETAILS: string[] = [
  'test1','test2','test3'
];
const STATUS: string[] = [
  'active','inactive'
];
const NAMES: string[] = [
  'test1','test2','test3'
];
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  // const name =
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
  //   ' ' +
  //   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
  //   '.';

  return {
    id: id.toString(),
    name: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    details: DETAILS[Math.round(Math.random() * (DETAILS.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
  };
}