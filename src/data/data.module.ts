import { NgModule } from '@angular/core';
import {
  getPokemonAbilityProvider,
  getPokemonAllProvider,
  getPokemonByIdProvider,
  getPokemonByNameProvider,
  getPokemonEggGroupByNameProvider,
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
    getPokemonEggGroupByNameProvider,
  ],
})
export class DataModule {}
