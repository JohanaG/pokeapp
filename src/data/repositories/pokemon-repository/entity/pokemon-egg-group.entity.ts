import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface IEggGroupEntity {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: IPokemonModel[];
}

export interface Name {
  language: IPokemonModel;
  name: string;
}
