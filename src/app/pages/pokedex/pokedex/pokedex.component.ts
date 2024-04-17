import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent {}
