import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';

const getPokemonByIdFactory = (pokemonRepository: PokemonRepositoryDomain) =>
  new GetPokemonByIdUseCase(pokemonRepository);

export const getPokemonByIdProvider = {
  provide: GetPokemonByIdUseCase,
  useFactorys: getPokemonByIdFactory,
  deps: [PokemonRepositoryDomain],
};
