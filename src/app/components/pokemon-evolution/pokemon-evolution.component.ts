import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, switchMap } from 'rxjs';
import { GetPokemonByNameUseCase } from 'src/usecases/pokemon/get-pokemon-by-name.usecase';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-evolution.component.html',
})
export class PokemonEvolutionComponent {
  private getPokemonByName = inject(GetPokemonByNameUseCase);
  @Input()
  set namePokemon(value: string) {
    this.setPokemonByName.next(value);
  }
  setPokemonByName = new BehaviorSubject<string>('');

  pokemon = this.setPokemonByName.pipe(
    switchMap((value) => this.getPokemonByName.execute(value)),
  );
}
