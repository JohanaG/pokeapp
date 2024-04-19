import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface ISpeciesDetailsEntity {
  flavor_text_entries: IFlavorTextEntry[];
  genera: IGenus[];
}

export interface IFlavorTextEntry {
  flavor_text: string;
  language: IPokemonModel;
}

export interface IGenus {
  genus: string;
  language: IPokemonModel;
}
