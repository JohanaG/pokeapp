import { IPokemonModel } from './pokemon.model';

export interface IPokemonSpeciesModel {
  description: string;
  category: string;
  urlEvolution: string;
  eggGroup: IPokemonModel;
}
