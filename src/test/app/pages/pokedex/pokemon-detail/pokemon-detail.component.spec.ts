import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailComponent } from 'src/app/pages/pokedex/pokemon-detail/pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonDetailComponent],
    });
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
