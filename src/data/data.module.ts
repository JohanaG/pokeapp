import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonSpeciesByIdProvider,
  getPokemonTypeByIdProvider,
  pokemonRepositoryProvider,
} from './providers/pokemon';

@NgModule({
  providers: [
    getPokemonAllProvider,
    getPokemonByIdProvider,
    pokemonRepositoryProvider,
    getPokemonTypeByIdProvider,
    getPokemonSpeciesByIdProvider,
  ],
})
export class DataModule {}
