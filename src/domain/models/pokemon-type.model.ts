import { ITypeDetailModel } from './pokemon-type-detail.model';
import { IPokemonModel } from './pokemon.model';

export interface IPokemonTypeModel {
  weaknesses: ITypeDetailModel[];
  name: string;
  pokemons: IPokemonModel[];
}
