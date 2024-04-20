import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonEggGroupModel } from 'src/domain/models/pokemon-egg-group.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonEggGroupByIdUseCase
  implements UseCase<number, IPokemonEggGroupModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(params: number): Observable<IPokemonEggGroupModel> {
    return this.pokemonRepository.getEggGroupById(params);
  }
}
