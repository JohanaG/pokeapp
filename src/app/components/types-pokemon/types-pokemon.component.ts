import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-types-pokemon',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  templateUrl: './types-pokemon.component.html',
})
export class TypesPokemonComponent {
  @Input() title: string = '';
  @Input() pokemons: IPokemonModel[] = [];
}
