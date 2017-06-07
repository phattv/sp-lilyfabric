import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  myData: Array<any>;

  constructor(private http: Http) {
    this
      .http
      .get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(response => this.myData = response);
  }
}
