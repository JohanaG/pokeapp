import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonEggGroupByNameUseCase } from 'src/usecases/pokemon/get-pokemon-egg-group-by-id.usecase';

const getPokemonEggGroupByIdFactory = (
  pokemonRepository: PokemonRepositoryDomain,
) => new GetPokemonEggGroupByNameUseCase(pokemonRepository);

export const getPokemonEggGroupByNameProvider = {
  provide: GetPokemonEggGroupByNameUseCase,
  useFactorys: getPokemonEggGroupByIdFactory,
  deps: [PokemonRepositoryDomain],
};
