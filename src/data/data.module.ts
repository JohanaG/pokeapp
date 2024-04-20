import { NgModule } from '@angular/core';
import {
  getPokemonAbilityProvider,
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
    getPokemonAbilityProvider,
  ],
})
export class DataModule {}
