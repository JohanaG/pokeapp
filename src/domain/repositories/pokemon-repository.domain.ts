import { Observable } from 'rxjs';
import { IPokemonModel } from '../models/pokemon.model';
import { IPokemonDetailModel } from '../models/pokemon-details.model';
import { IPokemonTypeModel } from '../models/pokemon-type.model';
import { IPokemonSpeciesModel } from '../models/pokemon-species.model';

export abstract class PokemonRepositoryDomain {
  abstract getPokemonList(): Observable<IPokemonModel[]>;
  abstract getPokemonById(id: number): Observable<IPokemonDetailModel>;
  abstract getPokemonTypeById(id: number): Observable<IPokemonTypeModel[]>;
  abstract getPokemonSpecieById(id: number): Observable<IPokemonSpeciesModel>;
  abstract getEvolutionChance(id: number): Observable<IPokemonModel[]>;
}
