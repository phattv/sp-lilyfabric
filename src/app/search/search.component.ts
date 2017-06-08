import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-search',
  template: 'Search component',
  animations: [routerTransition().slideToLeft()],
  host: {'[@routerTransition]': ''}
})

export class SearchComponent {

}
