import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { IPokemonAbilityModel } from 'src/domain/models/pokemon-ability.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';

export class GetPokemonAbilityUseCase
  implements UseCase<string, IPokemonAbilityModel>
{
  constructor(private pokemonRepository: PokemonRepositoryDomain) {}

  execute(param: string): Observable<IPokemonAbilityModel> {
    return this.pokemonRepository.getAbilityByName(param);
  }
}
