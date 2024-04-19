import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface ISpeciesDetailsEntity {
  flavor_text_entries: IFlavorTextEntry[];
  genera: IGenus[];
  evolution_chain: IEvolutionChain;
}

export interface IFlavorTextEntry {
  flavor_text: string;
  language: IPokemonModel;
}

export interface IGenus {
  genus: string;
  language: IPokemonModel;
}

export interface IEvolutionChain {
  url: string;
}
