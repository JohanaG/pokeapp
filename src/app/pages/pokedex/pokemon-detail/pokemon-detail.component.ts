import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';
import { DataModule } from 'src/data/data.module';
import { ChipsComponent } from 'src/app/components/chips/chips.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, DataModule, RouterLink, ChipsComponent],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  route = inject(ActivatedRoute);
  private getPokemonById = inject(GetPokemonByIdUseCase);

  pokemon = this.route.params.pipe(
    switchMap((value) => {
      const pokemonId = Number(value['id']);
      return this.getPokemonById.execute(pokemonId);
    }),
    tap((value) => console.log(value)),
  );
}
