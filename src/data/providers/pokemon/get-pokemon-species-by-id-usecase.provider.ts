import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonSpeciesByIdUseCase } from 'src/usecases/pokemon/get-pokemon-species.usecase';

const getPokemonSpeciesByIdFactory = (
  pokemonRepository: PokemonRepositoryDomain,
) => new GetPokemonSpeciesByIdUseCase(pokemonRepository);

export const getPokemonSpeciesByIdProvider = {
  provide: GetPokemonSpeciesByIdUseCase,
  useFactorys: getPokemonSpeciesByIdFactory,
  deps: [PokemonRepositoryDomain],
};
