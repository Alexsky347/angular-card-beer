import { Routes } from '@angular/router';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeersDetailsComponent } from './beers-details/beers-details.component';

export const beersRoutes: Routes = [
  {
    path: '',
    component: BeersListComponent
  },
  {
    path: ':beerId',
    component: BeersDetailsComponent
  }
];
