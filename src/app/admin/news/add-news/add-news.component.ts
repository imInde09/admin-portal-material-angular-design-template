import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  constructor(private router: Router) {

  }
  goNews() {
    console.log("news");
    this.router.navigate(['/admin/news']);
  }
  formData = {
    title: '',
    slug: '',
    description: '',
    image: '',
    status: '',
  }
  addNews() {
    console.log("add news");
    console.log(this.formData);
  }
}
