import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetPokemonTypeByIdUseCase } from 'src/usecases/pokemon/get-pokemon-type-by-id.usecase';
import { switchMap } from 'rxjs';
import { HeaderPokemonComponent } from 'src/app/components/header-pokemon/header-pokemon.component';
import { TypesPokemonComponent } from 'src/app/components/types-pokemon/types-pokemon.component';
import { DataModule } from 'src/data/data.module';

@Component({
  selector: 'app-pokemon-type',
  standalone: true,
  imports: [
    CommonModule,
    HeaderPokemonComponent,
    TypesPokemonComponent,
    DataModule,
  ],
  templateUrl: './pokemon-type.component.html',
})
export class PokemonTypeComponent {
  route = inject(ActivatedRoute);
  private getPokemonTypeId = inject(GetPokemonTypeByIdUseCase);

  pokemonType = this.route.params.pipe(
    switchMap((value) => {
      return this.getPokemonTypeId.execute(value['id']);
    }),
  );
}
