import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs';
import { GetPokemonAbilityUseCase } from 'src/usecases/pokemon/get-pokemon-ability-by-name.usecase';
import { DataModule } from 'src/data/data.module';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';
import { HeaderPokemonComponent } from 'src/app/components/header-pokemon/header-pokemon.component';

@Component({
  selector: 'app-ability',
  standalone: true,
  imports: [CommonModule, DataModule, PokemonComponent, HeaderPokemonComponent],
  templateUrl: './ability.component.html',
})
export class AbilityComponent {
  route = inject(ActivatedRoute);
  private getPokemonAbility = inject(GetPokemonAbilityUseCase);

  ability = this.route.params.pipe(
    switchMap((value) => {
      return this.getPokemonAbility.execute(value['name']);
    }),
  );
}
