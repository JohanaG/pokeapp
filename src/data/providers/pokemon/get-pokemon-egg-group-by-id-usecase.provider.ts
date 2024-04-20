import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonEggGroupByIdUseCase } from 'src/usecases/pokemon/get-pokemon-egg-group-by-id.usecase';

const getPokemonEggGroupByIdFactory = (
  pokemonRepository: PokemonRepositoryDomain,
) => new GetPokemonEggGroupByIdUseCase(pokemonRepository);

export const getPokemonEggGroupByIdProvider = {
  provide: GetPokemonEggGroupByIdUseCase,
  useFactorys: getPokemonEggGroupByIdFactory,
  deps: [PokemonRepositoryDomain],
};
