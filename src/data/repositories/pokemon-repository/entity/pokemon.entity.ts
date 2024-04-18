export interface IPokemonEntity {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemonResult[];
}

export interface IPokemonResult {
  name: string;
  url: string;
}
