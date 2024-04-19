import { Observable } from 'rxjs';
import { IPokemonModel } from '../models/pokemon.model';
import { IPokemonDetailModel } from '../models/pokemon-details.model';
import { IPokemonTypeModel } from '../models/pokemon-type.model';

export abstract class PokemonRepositoryDomain {
  abstract getPokemonList(): Observable<IPokemonModel[]>;
  abstract getPokemonById(id: number): Observable<IPokemonDetailModel>;
  abstract getPokemonTypeByID(id: number): Observable<IPokemonTypeModel[]>;
}
