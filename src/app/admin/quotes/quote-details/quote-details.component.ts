import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent {
  //   id!: string;
  //   name!: string;
  //   date!: string;
  //   progress!: string;
  //   item!: string;
  // constructor(private route: ActivatedRoute) { }
  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //       const id = params['id'];
  //       const name = params['name'];
  //       const date = params['date'];
  //       const progress = params['progress'];
  //       const item = params['item'];
  //   });
  // }
  details = {
    id: '1',
    name: 'John Doe',
    email: ' jerome.isabelle@plombaction.com',
    date: '2021-07-01',
    message: "Please quote this unit for 1u Does it process a hole for insert a wire. What's the material metal plate made of ? Thank you"
   }
}
