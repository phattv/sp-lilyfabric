import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-us',
  template: 'Us Component',
  animations: [routerTransition().slideToLeft()],
  host: {'[@routerTransition]': ''}
})

export class UsComponent {

}
