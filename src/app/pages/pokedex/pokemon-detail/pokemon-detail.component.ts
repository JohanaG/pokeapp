import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';
import { DataModule } from 'src/data/data.module';
import { ChipsComponent } from 'src/app/components/chips/chips.component';
import { GetPokemonTypeByIdUseCase } from 'src/usecases/pokemon/get-pokemon-type-by-id.usecase';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';
import { GetPokemonSpeciesByIdUseCase } from 'src/usecases/pokemon/get-pokemon-species.usecase';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, DataModule, RouterLink, ChipsComponent],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  route = inject(ActivatedRoute);
  private getPokemonById = inject(GetPokemonByIdUseCase);
  private getPokemonTypeById = inject(GetPokemonTypeByIdUseCase);
  private getPokemonSpeciesId = inject(GetPokemonSpeciesByIdUseCase);
  pokemonId = 0;

  pokemon = this.route.params.pipe(
    switchMap((value) => {
      this.pokemonId = Number(value['id']);
      return this.getPokemonById.execute(this.pokemonId);
    }),
    tap((value) => console.log(value)),
  );

  pokemonWeaknesses = this.pokemon.pipe(
    switchMap((pokemon) => {
      const pokemonTypeId = this.getId(pokemon.types[0].url);
      return this.getPokemonTypeById.execute(pokemonTypeId);
    }),
    tap((value) => console.log(value)),
  );

  pokemonSpecies = this.pokemon.pipe(
    switchMap((pokemon) => {
      const pokemSpeciesId = this.getId(pokemon.species.url);
      return this.getPokemonSpeciesId.execute(pokemSpeciesId);
    }),
  );

  getId(url: string): number {
    return Number(GetPokemonID(url));
  }
}
