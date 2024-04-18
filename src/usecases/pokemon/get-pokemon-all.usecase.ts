import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonAllUseCase implements UseCase<void, IPokemonModel[]> {
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(): Observable<IPokemonModel[]> {
    return this.pokemonRepository.getPokemonList();
  }
}
