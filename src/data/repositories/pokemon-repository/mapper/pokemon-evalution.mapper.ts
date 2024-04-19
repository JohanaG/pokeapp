import { Mapper } from 'src/base/mapper';
import { IEvolutionChainEntity } from '../entity/pokemon-evoution-chain.entity';
import { IPokemonModel } from 'src/domain/models/pokemon.model';

export class PokemonEvalutionMapper extends Mapper<
  IEvolutionChainEntity,
  IPokemonModel[]
> {
  mapFrom({ chain }: IEvolutionChainEntity): IPokemonModel[] {
    const pokemonChain = [];
    pokemonChain.push(chain.species);
    if (chain.evolves_to.length === 0) return pokemonChain;

    const evolution = chain.evolves_to[0];
    pokemonChain.push(evolution.species);

    if (evolution.evolves_to.length === 0) return pokemonChain;
    const evolutionFinal = evolution.evolves_to[0];
    pokemonChain.push(evolutionFinal.species);

    return pokemonChain;
  }
}
