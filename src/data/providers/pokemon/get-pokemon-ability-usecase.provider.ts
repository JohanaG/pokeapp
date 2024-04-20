import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { GetPokemonAbilityUseCase } from 'src/usecases/pokemon/get-pokemon-ability-by-name.usecase';

const getPokemonAbilityFactory = (pokemonRepository: PokemonRepositoryDomain) =>
  new GetPokemonAbilityUseCase(pokemonRepository);

export const getPokemonAbilityProvider = {
  provide: GetPokemonAbilityUseCase,
  useFactorys: getPokemonAbilityFactory,
  deps: [PokemonRepositoryDomain],
};
