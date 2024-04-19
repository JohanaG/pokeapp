import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonTypeByIdProvider,
  pokemonRepositoryProvider,
} from './providers/pokemon';

@NgModule({
  providers: [
    getPokemonAllProvider,
    getPokemonByIdProvider,
    pokemonRepositoryProvider,
    getPokemonTypeByIdProvider,
  ],
})
export class DataModule {}
