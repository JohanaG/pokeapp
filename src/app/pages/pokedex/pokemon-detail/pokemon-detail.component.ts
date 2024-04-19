import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';
import { DataModule } from 'src/data/data.module';
import { ChipsComponent } from 'src/app/components/chips/chips.component';
import { GetPokemonTypeByIdUseCase } from 'src/usecases/pokemon/get-pokemon-type-by-id.usecase';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, DataModule, RouterLink, ChipsComponent],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  route = inject(ActivatedRoute);
  private getPokemonById = inject(GetPokemonByIdUseCase);
  private getPokemonTypeByID = inject(GetPokemonTypeByIdUseCase);

  pokemon = this.route.params.pipe(
    switchMap((value) => {
      const pokemonId = Number(value['id']);
      return this.getPokemonById.execute(pokemonId);
    }),
    tap((value) => console.log(value)),
  );

  pokemonWeaknesses = this.pokemon.pipe(
    switchMap((pokemon) => {
      const pokemonTypeUrl = pokemon.types[0].url;
      const pokemonTypId = Number(GetPokemonID(pokemonTypeUrl));
      return this.getPokemonTypeByID.execute(pokemonTypId);
    }),
    tap((value) => console.log(value)),
  );
}
