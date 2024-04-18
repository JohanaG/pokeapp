import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  getPokemonByIdProvider,
  pokemonRepositoryProvider,
} from './providers/pokemon';

@NgModule({
  providers: [
    getPokemonAllProvider,
    getPokemonByIdProvider,
    pokemonRepositoryProvider,
  ],
})
export class DataModule {}
