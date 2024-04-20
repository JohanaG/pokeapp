import { ITypeDetailModel } from './pokemon-type-detail.model';
import { IPokemonModel } from './pokemon.model';

export interface IPokemonDetailModel {
  id: number;
  cover: string;
  types: ITypeDetailModel[];
  weight: number;
  height: number;
  abilities: IPokemonModel[];
  species: IPokemonModel;
  name: string;
}
