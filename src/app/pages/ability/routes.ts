import { Routes } from '@angular/router';
import { AbilityComponent } from './ability/ability.component';

export const routes: Routes = [
  { path: '', component: AbilityComponent },
  { path: ':name', component: AbilityComponent },
];
