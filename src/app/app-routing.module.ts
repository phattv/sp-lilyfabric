import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MeComponent } from './me/me.component';
import { UsComponent } from './us/us.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  }, {
    path: 'search',
    component: SearchComponent,
    data: {
      title: 'Search'
    }
  }, {
    path: 'me',
    component: MeComponent,
    data: {
      title: 'Me'
    }
  }, {
    path: 'us',
    component: UsComponent,
    data: {
      title: 'About us'
    }
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
