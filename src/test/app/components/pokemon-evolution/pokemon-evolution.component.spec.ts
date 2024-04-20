import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonEvolutionComponent } from 'src/app/components/pokemon-evolution/pokemon-evolution.component';

describe('PokemonEvolutionComponent', () => {
  let component: PokemonEvolutionComponent;
  let fixture: ComponentFixture<PokemonEvolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonEvolutionComponent],
    });
    fixture = TestBed.createComponent(PokemonEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
