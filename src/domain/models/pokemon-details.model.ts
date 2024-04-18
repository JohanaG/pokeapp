import { IPokemonTypeModel } from './pokemon-type.model';

export interface IPokemonDetailModel {
  cover: string;
  types: IPokemonTypeModel[];
}
