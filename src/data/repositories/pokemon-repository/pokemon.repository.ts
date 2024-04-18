import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { PokemonRepositoryDomain } from 'src/domain/repositories/pokemon-repository.domain';
import { env } from 'src/env/env';
import { IPokemonEntity } from './entity/pokemon.entity';
import { IPokemonDetailModel } from 'src/domain/models/pokemon-details.model';
import { IPokemonDetailsEntity } from './entity/pokemon-details.entity';
import { PokemonDetailMapper } from './mapper/pokemon-detail.mapper';

export class PokemonRepository extends PokemonRepositoryDomain {
  private http = inject(HttpClient);
  private urlBase = env.host + 'pokemon';
  private mapper = new PokemonDetailMapper();

  getPokemonList(): Observable<IPokemonModel[]> {
    return this.http.get<IPokemonEntity>(this.urlBase).pipe(
      map((pokemonList) => pokemonList.results),
      tap((value) => console.log(value)),
    );
  }

  getPokemonById(id: number): Observable<IPokemonDetailModel> {
    const endpoint = this.urlBase + '/' + id;
    return this.http.get<IPokemonDetailsEntity>(endpoint).pipe(
      map((value) => this.mapper.mapFrom(value)),
      tap((value) => console.log(value)),
    );
  }
}
