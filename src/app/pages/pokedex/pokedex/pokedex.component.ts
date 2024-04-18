import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';
import { DataModule } from 'src/data/data.module';
import { GetPokemonAllUseCase } from 'src/usecases/pokemon/get-pokemon-all.usecase';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonComponent, DataModule],
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent {
  getPokemonAll = inject(GetPokemonAllUseCase);
  getPokemons = this.getPokemonAll.execute();
}
