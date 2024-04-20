import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from 'src/data/data.module';
import { HeaderPokemonComponent } from 'src/app/components/header-pokemon/header-pokemon.component';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';
import { TypesPokemonComponent } from 'src/app/components/types-pokemon/types-pokemon.component';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonEggGroupByNameUseCase } from 'src/usecases/pokemon/get-pokemon-egg-group-by-id.usecase';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-egg-group',
  standalone: true,
  imports: [
    CommonModule,
    DataModule,
    PokemonComponent,
    HeaderPokemonComponent,
    TypesPokemonComponent,
  ],
  templateUrl: './pokemon-egg-group.component.html',
})
export class PokemonEggGroupComponent {
  route = inject(ActivatedRoute);
  private getEggGroup = inject(GetPokemonEggGroupByNameUseCase);

  eggGroup = this.route.params.pipe(
    switchMap((value) => {
      return this.getEggGroup.execute(value['name']);
    }),
  );
}
