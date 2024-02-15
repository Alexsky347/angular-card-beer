import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'beers',
    loadChildren: () =>
      import('./page/beers/beers.routes').then((m) => m.beersRoutes)
  },
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  }
];
