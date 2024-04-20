import { IPokemonModel } from './pokemon.model';

export interface IPokemonAbilityModel {
  description: string;
  pokemon: IPokemonModel[];
  name: string;
}
