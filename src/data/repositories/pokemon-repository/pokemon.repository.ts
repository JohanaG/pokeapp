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
import { PokemonTypeDetailMapper } from './mapper/pokemon-type-detail.mapper';
import { IPokemonTypeDetails } from './entity/pokemon-type-details.entity';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';
import { IPokemonSpeciesModel } from 'src/domain/models/pokemon-species.model';
import { ISpeciesDetailsEntity } from './entity/pokemon-species.entity';
import { PokemonSpeciesMapper } from './mapper/pokemon-species.mapper';

export class PokemonRepository extends PokemonRepositoryDomain {
  private http = inject(HttpClient);
  private urlBase = env.host + 'pokemon';
  private urlTypeDetail = env.host + 'type';
  private urlSpecies = env.host + 'pokemon-species';
  private mapper = new PokemonDetailMapper();
  private mapperTypeDetail = new PokemonTypeDetailMapper();
  private mapperSpecies = new PokemonSpeciesMapper();

  getPokemonList(): Observable<IPokemonModel[]> {
    return this.http
      .get<IPokemonEntity>(this.urlBase)
      .pipe(map((pokemonList) => pokemonList.results));
  }

  getPokemonById(id: number): Observable<IPokemonDetailModel> {
    const endpoint = this.urlBase + '/' + id;
    return this.http.get<IPokemonDetailsEntity>(endpoint).pipe(
      tap((value) => console.log(value)),
      map((value) => this.mapper.mapFrom(value)),
    );
  }

  getPokemonTypeById(id: number): Observable<IPokemonTypeModel[]> {
    const endpoint = this.urlTypeDetail + '/' + id;
    return this.http.get<IPokemonTypeDetails>(endpoint).pipe(
      tap((value) => console.log(value)),
      map((value) => this.mapperTypeDetail.mapFrom(value)),
    );
  }

  getPokemonSpecieById(id: number): Observable<IPokemonSpeciesModel> {
    const endpoint = this.urlSpecies + '/' + id;
    return this.http.get<ISpeciesDetailsEntity>(endpoint).pipe(
      map((value) => this.mapperSpecies.mapFrom(value)),
      tap((value) => console.log(value)),
    );
  }
}
