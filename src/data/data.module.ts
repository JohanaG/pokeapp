import { NgModule } from '@angular/core';
import {
  getPokemonAbilityProvider,
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonByNameProvider,
  getPokemonEggGroupByIdProvider,
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
    getPokemonAbilityProvider,
    getPokemonEggGroupByIdProvider,
  ],
})
export class DataModule {}
