import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonTypeByIdUseCase } from 'src/usecases/pokemon/get-pokemon-type-by-id.usecase';

const getPokemonTypeByIdFactory = (
  pokemonRepository: PokemonRepositoryDomain,
) => new GetPokemonTypeByIdUseCase(pokemonRepository);

export const getPokemonTypeByIdProvider = {
  provide: GetPokemonTypeByIdUseCase,
  useFactorys: getPokemonTypeByIdFactory,
  deps: [PokemonRepositoryDomain],
};
