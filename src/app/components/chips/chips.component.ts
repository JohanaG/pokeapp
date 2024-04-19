import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  @Input() chips: IPokemonTypeModel[] = [];
}
