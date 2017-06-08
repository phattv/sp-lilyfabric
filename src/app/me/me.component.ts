import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-me',
  template: 'Me component',
  animations: [routerTransition().slideToLeft()],
  host: {'[@routerTransition]': ''}
})

export class MeComponent {

}
