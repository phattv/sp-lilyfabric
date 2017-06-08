import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [routerTransition().slideToLeft()],
  host: {'[@routerTransition]': ''}
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
