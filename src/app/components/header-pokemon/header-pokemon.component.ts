import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-pokemon.component.html',
})
export class HeaderPokemonComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
