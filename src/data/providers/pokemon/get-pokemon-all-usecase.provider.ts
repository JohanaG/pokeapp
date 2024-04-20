import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonAllUseCase } from 'src/usecases/pokemon/get-pokemon-all.usecase';

const getPokemonAllFactory = (pokemonRepository: PokemonRepositoryDomain) =>
  new GetPokemonAllUseCase(pokemonRepository);

export const getPokemonAllProvider = {
  provide: GetPokemonAllUseCase,
  useFactorys: getPokemonAllFactory,
  deps: [PokemonRepositoryDomain],
};
