import { NgModule } from '@angular/core';
import {
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonByNameProvider,
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
    getPokemonByNameProvider,
  ],
})
export class DataModule {}
