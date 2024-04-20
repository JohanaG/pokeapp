import { IPokemonModel } from './pokemon.model';

export interface IPokemonEggGroupModel {
  id: number;
  name: string;
  pokemons: IPokemonModel[];
}
