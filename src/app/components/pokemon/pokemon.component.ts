import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { ChipsComponent } from '../chips/chips.component';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  private pokemonById = inject(GetPokemonByIdUseCase);
  @Input({ required: true })
  pokemon?: IPokemonModel;
  getPokemon = this.pokemonById.execute(1);
}
