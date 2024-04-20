export interface IAbilityEntity {
  flavor_text_entries: IFlavorTextEntry[];
  names: IName[];
  pokemon: IPokemon[];
}

export interface IGeneration {
  name: string;
  url: string;
}

export interface IFlavorTextEntry {
  flavor_text: string;
  language: IGeneration;
}

export interface IName {
  language: IGeneration;
  name: string;
}

export interface IPokemon {
  is_hidden: boolean;
  pokemon: IGeneration;
  slot: number;
}
