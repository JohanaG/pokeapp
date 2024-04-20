import { Routes } from '@angular/router';
import { PokemonEggGroupComponent } from './pokemon-egg-group/pokemon-egg-group.component';

export const routes: Routes = [
  { path: '', component: PokemonEggGroupComponent },
  { path: ':name', component: PokemonEggGroupComponent },
];
