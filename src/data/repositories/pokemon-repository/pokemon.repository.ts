import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { env } from 'src/env/env';
import { IPokemonEntity } from './entity/pokemon.entity';

export class PokemonRepository extends PokemonRepositoryDomain {
  private http = inject(HttpClient);
  private endpoint = env.host + 'pokemon';

  getPokemonList(): Observable<IPokemonModel[]> {
    return this.http.get<IPokemonEntity>(this.endpoint).pipe(
      map((pokemonList) => pokemonList.results),
      tap((value) => console.log(value)),
    );
  }
}
