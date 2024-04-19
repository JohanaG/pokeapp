import { IPokemonTypeModel } from './pokemon-type.model';
import { IPokemonModel } from './pokemon.model';

export interface IPokemonDetailModel {
  cover: string;
  types: IPokemonTypeModel[];
  peso: number;
  altura: number;
  habilidades: IPokemonModel[];
}
