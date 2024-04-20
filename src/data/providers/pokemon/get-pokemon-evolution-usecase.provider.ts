import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonEvolutionUseCase } from 'src/usecases/pokemon/get-pokemon-evolution.usecase';

const getPokemonEvolutionFactory = (
  pokemonRepository: PokemonRepositoryDomain,
) => new GetPokemonEvolutionUseCase(pokemonRepository);

export const getPokemonEvolutionProvider = {
  provide: GetPokemonEvolutionUseCase,
  useFactorys: getPokemonEvolutionFactory,
  deps: [PokemonRepositoryDomain],
};
