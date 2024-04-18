import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonByIdUseCase
  implements UseCase<number, IPokemonDetailModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(id: number): Observable<IPokemonDetailModel> {
    return this.pokemonRepository.getPokemonById(id);
  }
}
