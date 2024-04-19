import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonSpeciesModel } from 'src/domain/models/pokemon-species.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonSpeciesByIdUseCase
  implements UseCase<number, IPokemonSpeciesModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}
  execute(params: number): Observable<IPokemonSpeciesModel> {
    return this.pokemonRepository.getPokemonSpecieById(params);
  }
}
