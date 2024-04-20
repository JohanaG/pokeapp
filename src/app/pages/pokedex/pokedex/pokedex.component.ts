import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';
import { DataModule } from 'src/data/data.module';
import { GetPokemonAllUseCase } from 'src/usecases/pokemon/get-pokemon-all.usecase';
import { IPokemonModel } from 'src/domain/models/pokemon.model';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonComponent, DataModule],
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent {
  private getPokemonAll = inject(GetPokemonAllUseCase);
  private getPokemon = new BehaviorSubject<number>(0);
  offset = 0;
  pokemonList: IPokemonModel[] = [];

  getPokemons = this.getPokemon.pipe(
    switchMap((value) => this.getPokemonAll.execute(value)),
    tap((pokemons) => {
      this.pokemonList = [...this.pokemonList, ...pokemons];
      this.offset += 20;
    }),
    map(() => this.pokemonList),
  );

  showMore() {
    this.getPokemon.next(this.offset);
  }
}
