import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tabs: Array<any> = [{
    link: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    link: 'search',
    label: 'Search',
    icon: 'search'
  }, {
    link: 'me',
    label: 'Me',
    icon: 'account_circle'
  }, {
    link: 'us',
    label: 'Us',
    icon: 'info'
  }]
}
