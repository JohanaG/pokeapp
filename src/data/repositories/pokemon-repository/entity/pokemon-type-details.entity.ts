export interface IPokemonTypeDetails {
  damage_relations: IDamageRelations;
}

export interface IDamageRelations {
  double_damage_from: IGeneration[];
}

export interface IGeneration {
  name: string;
  url: string;
}
