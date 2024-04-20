import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pokedex',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./pages/pokedex/routes').then((r) => r.routes),
  },
  {
    path: 'habilidades',
    component: DefaultLayoutComponent,
    loadChildren: () => import('./pages/ability/routes').then((r) => r.routes),
  },
  {
    path: 'tipos',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./pages/pokemon-type/routes').then((r) => r.routes),
  },
];
