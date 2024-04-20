import { PokemonRepository } from 'src/data/repositories/pokemon-repository/pokemon.repository';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export const pokemonRepositoryProvider = {
  provide: PokemonRepositoryDomain,
  useClass: PokemonRepository,
};
