import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonTypeByIdUseCase
  implements UseCase<number, IPokemonTypeModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(id: number): Observable<IPokemonTypeModel> {
    return this.pokemonRepository.getPokemonTypeById(id);
  }
}
