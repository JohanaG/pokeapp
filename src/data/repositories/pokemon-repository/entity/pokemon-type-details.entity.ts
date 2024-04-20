import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface IPokemonTypeDetails {
  damage_relations: IDamageRelations;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}

export interface IDamageRelations {
  double_damage_from: IGeneration[];
}

export interface IGeneration {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: IPokemonModel;
  slot: number;
}

export interface Name {
  language: IPokemonModel;
  name: string;
}
