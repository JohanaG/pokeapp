import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemonTypeModel } from 'src/domain/models/pokemon-type.model';
import { RouterLink } from '@angular/router';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';
import { ITypeDetailModel } from 'src/domain/models/pokemon-type-detail.model';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './chips.component.html',
})
export class ChipsComponent {
  @Input() chips: ITypeDetailModel[] = [];

  getId(url: string): number {
    return Number(GetPokemonID(url));
  }
}
