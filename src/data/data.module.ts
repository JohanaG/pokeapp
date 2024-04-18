import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  pokemonRepositoryProvider,
} from './providers/pokemon';

@NgModule({
  providers: [getPokemonAllProvider, pokemonRepositoryProvider],
})
export class DataModule {}
