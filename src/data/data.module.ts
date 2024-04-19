import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonEvolutionProvider,
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
    getPokemonEvolutionProvider,
  ],
})
export class DataModule {}
