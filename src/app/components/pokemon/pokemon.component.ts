import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { ChipsComponent } from '../chips/chips.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ChipsComponent],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  @Input({ required: true })
  pokemon?: IPokemonModel;
}
