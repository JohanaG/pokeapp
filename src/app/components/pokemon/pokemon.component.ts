import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { ChipsComponent } from '../chips/chips.component';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  private pokemonById = inject(GetPokemonByIdUseCase);
  setPokemonId = new BehaviorSubject<number>(0);
  _pokemon?: IPokemonModel;
  pokemonId?: number;
  getPokemon = this.setPokemonId.pipe(
    switchMap((value) => this.pokemonById.execute(value)),
  );

  @Input({ required: true }) set pokemon(pokemon: IPokemonModel) {
    this._pokemon = pokemon;
    this.pokemonId = Number(GetPokemonID(pokemon.url));
    this.setPokemonId.next(this.pokemonId);
  }
}
