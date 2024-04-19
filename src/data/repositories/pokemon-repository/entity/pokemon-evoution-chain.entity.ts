import { IPokemonModel } from 'src/domain/models/pokemon.model';

export interface IEvolutionChainEntity {
  baby_trigger_item: null;
  chain: IChain;
  id: number;
}

export interface IChain {
  evolves_to: IChain[];
  is_baby: boolean;
  species: IPokemonModel;
}
