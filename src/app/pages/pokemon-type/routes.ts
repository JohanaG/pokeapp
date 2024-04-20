import { Routes } from '@angular/router';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

export const routes: Routes = [
  { path: '', component: PokemonTypeComponent },
  { path: ':id', component: PokemonTypeComponent },
];
