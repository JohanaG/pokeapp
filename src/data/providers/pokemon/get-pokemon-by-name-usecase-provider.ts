import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonByNameUseCase } from 'src/usecases/pokemon/get-pokemon-by-name.usecase';

const getPokemonByNameFactory = (pokemonRepository: PokemonRepositoryDomain) =>
  new GetPokemonByNameUseCase(pokemonRepository);

export const getPokemonByNameProvider = {
  provide: GetPokemonByNameUseCase,
  useFactorys: getPokemonByNameFactory,
  deps: [PokemonRepositoryDomain],
};
