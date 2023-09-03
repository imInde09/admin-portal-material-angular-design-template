import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'name', 'items','date','actions'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private route: ActivatedRoute,private router: Router) {
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
    console.log(item.id+item.name+item.date+item.progress+item.item);
    const queryParams = {
      id: item.id,
      name: item.name,
      date: item.date,
      progress: item.progress,
      item: item.item
  };
    this.router.navigate(['/admin/quotes/quotedetails']);
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
}

export interface UserData {
  id: string;
  name: string;
  date: string;
  progress: string;
  item: string;
}

/** Constants used to fill up our data base. */
const ITEMS: string[] = [
  'test1','test2','test3'
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
    date: Date.now().toString(),
    progress: Math.round(Math.random() * 100).toString(),
    item: ITEMS[Math.round(Math.random() * (ITEMS.length - 1))],
  };
}