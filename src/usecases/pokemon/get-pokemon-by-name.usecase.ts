import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonByNameUseCase
  implements UseCase<string, IPokemonDetailModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(name: string): Observable<IPokemonDetailModel> {
    return this.pokemonRepository.getPokemonByName(name);
  }
}
