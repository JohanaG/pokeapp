import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';
import { RouterLink } from '@angular/router';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  @Input() chips: IPokemonTypeModel[] = [];

  getId(url: string): number {
    return Number(GetPokemonID(url));
  }
}
