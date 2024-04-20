import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { GetPokemonByIdUseCase } from 'src/usecases/pokemon/get-pokemon-by-id.usecase';
import { DataModule } from 'src/data/data.module';
import { ChipsComponent } from 'src/app/components/chips/chips.component';
import { GetPokemonTypeByIdUseCase } from 'src/usecases/pokemon/get-pokemon-type-by-id.usecase';
import { GetPokemonID } from 'src/app/utils/helpers/get-pokemon-id';
import { GetPokemonSpeciesByIdUseCase } from 'src/usecases/pokemon/get-pokemon-species.usecase';
import { GetPokemonEvolutionUseCase } from 'src/usecases/pokemon/get-pokemon-evolution.usecase';
import { PokemonEvolutionComponent } from 'src/app/components/pokemon-evolution/pokemon-evolution.component';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [
    CommonModule,
    DataModule,
    RouterLink,
    ChipsComponent,
    PokemonEvolutionComponent,
  ],
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  route = inject(ActivatedRoute);
  private getPokemonById = inject(GetPokemonByIdUseCase);
  private getPokemonTypeById = inject(GetPokemonTypeByIdUseCase);
  private getPokemonSpeciesId = inject(GetPokemonSpeciesByIdUseCase);
  private getPokemonEvolution = inject(GetPokemonEvolutionUseCase);

  pokemonId = 0;

  pokemon = this.route.params.pipe(
    switchMap((value) => {
      this.pokemonId = Number(value['id']);
      return this.getPokemonById.execute(this.pokemonId);
    }),
  );

  pokemonWeaknesses = this.pokemon.pipe(
    switchMap((pokemon) => {
      const pokemonTypeId = this.getId(pokemon.types[0].url);
      return this.getPokemonTypeById.execute(pokemonTypeId);
    }),
    map((value) => value.weaknesses),
  );

  pokemonSpecies = this.pokemon.pipe(
    switchMap((pokemon) => {
      const pokemSpeciesId = this.getId(pokemon.species.url);
      return this.getPokemonSpeciesId.execute(pokemSpeciesId);
    }),
  );

  pokemonEvolution = this.pokemonSpecies.pipe(
    switchMap((pokemon) => {
      const pokemonEvolutionId = this.getId(pokemon.urlEvolution);
      return this.getPokemonEvolution.execute(pokemonEvolutionId);
    }),

    tap((value) => console.log(value)),
  );

  getId(url: string): number {
    return Number(GetPokemonID(url));
  }
}
