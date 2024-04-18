import { Observable } from 'rxjs';
import { IPokemonModel } from '../models/pokemon.model';

export abstract class PokemonRepositoryDomain {
  abstract getPokemonList(): Observable<IPokemonModel[]>;
}
