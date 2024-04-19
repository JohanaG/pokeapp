import { IPokemonTypeModel } from './pokemon-type.model';
import { IPokemonModel } from './pokemon.model';

export interface IPokemonDetailModel {
  id: number;
  cover: string;
  types: IPokemonTypeModel[];
  weight: number;
  height: number;
  abilities: IPokemonModel[];
  species: IPokemonModel;
  name: string;
}
