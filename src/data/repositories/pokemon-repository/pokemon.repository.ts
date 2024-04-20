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
import { PokemonEvalutionMapper } from './mapper/pokemon-evalution.mapper';
import { IEvolutionChainEntity } from './entity/pokemon-evoution-chain.entity';
import { PokemonAbilityMapper } from './mapper/pokemon-ability.mapper';

import { IAbilityEntity } from './entity/pokemon-ability.entity';
import { IPokemonAbilityModel } from 'src/domain/models/pokemon-ability.model';
import { PokemonEggGroupMapper } from './mapper/pokemon-egg-group.mapper';
import { IPokemonEggGroupModel } from 'src/domain/models/pokemon-egg-group.model';
import { IEggGroupEntity } from './entity/pokemon-egg-group.entity';

export class PokemonRepository extends PokemonRepositoryDomain {
  private http = inject(HttpClient);
  private urlBase = env.host + 'pokemon';
  private urlTypeDetail = env.host + 'type';
  private urlSpecies = env.host + 'pokemon-species';
  private urlEvolution = env.host + 'evolution-chain';
  private urlAbility = env.host + 'ability';
  private urlEggGroup = env.host + 'egg-group';
  private mapper = new PokemonDetailMapper();
  private mapperTypeDetail = new PokemonTypeDetailMapper();
  private mapperSpecies = new PokemonSpeciesMapper();
  private mapperEvolution = new PokemonEvalutionMapper();
  private mapperAbility = new PokemonAbilityMapper();
  private mapperEggGroup = new PokemonEggGroupMapper();

  getPokemonList(offset: number): Observable<IPokemonModel[]> {
    const endpoint = this.urlBase + `?offset=${offset}`;
    return this.http
      .get<IPokemonEntity>(endpoint)
      .pipe(map((pokemonList) => pokemonList.results));
  }

  getPokemonById(id: number): Observable<IPokemonDetailModel> {
    const endpoint = this.urlBase + '/' + id;
    return this.http
      .get<IPokemonDetailsEntity>(endpoint)
      .pipe(map((value) => this.mapper.mapFrom(value)));
  }

  getPokemonTypeById(id: number): Observable<IPokemonTypeModel> {
    const endpoint = this.urlTypeDetail + '/' + id;
    return this.http
      .get<IPokemonTypeDetails>(endpoint)
      .pipe(map((value) => this.mapperTypeDetail.mapFrom(value)));
  }

  getPokemonSpecieById(id: number): Observable<IPokemonSpeciesModel> {
    const endpoint = this.urlSpecies + '/' + id;
    return this.http
      .get<ISpeciesDetailsEntity>(endpoint)
      .pipe(map((value) => this.mapperSpecies.mapFrom(value)));
  }

  getEvolutionChance(id: number): Observable<IPokemonModel[]> {
    const endpoint = this.urlEvolution + '/' + id;
    return this.http
      .get<IEvolutionChainEntity>(endpoint)
      .pipe(map((value) => this.mapperEvolution.mapFrom(value)));
  }

  getPokemonByName(name: string): Observable<IPokemonDetailModel> {
    const endpoint = this.urlBase + '/' + name;
    return this.http
      .get<IPokemonDetailsEntity>(endpoint)
      .pipe(map((value) => this.mapper.mapFrom(value)));
  }

  getAbilityByName(name: string): Observable<IPokemonAbilityModel> {
    const endpoint = this.urlAbility + '/' + name;
    return this.http.get<IAbilityEntity>(endpoint).pipe(
      map(this.mapperAbility.mapFrom),
      tap((value) => console.log(value)),
    );
  }

  getEggGroupByName(name: string): Observable<IPokemonEggGroupModel> {
    const endpoint = this.urlEggGroup + '/' + name;
    return this.http
      .get<IEggGroupEntity>(endpoint)
      .pipe(map(this.mapperEggGroup.mapFrom));
  }
}
