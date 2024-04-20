import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface IAbilityEntity {
  flavor_text_entries: IFlavorTextEntry[];
  names: IName[];
  pokemon: IPokemon[];
}

export interface IFlavorTextEntry {
  flavor_text: string;
  language: IPokemonModel;
}

export interface IName {
  language: IPokemonModel;
  name: string;
}

export interface IPokemon {
  is_hidden: boolean;
  pokemon: IPokemonModel;
  slot: number;
}
