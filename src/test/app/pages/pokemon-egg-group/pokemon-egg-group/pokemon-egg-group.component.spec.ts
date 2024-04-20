import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonEggGroupComponent } from 'src/app/pages/pokemon-egg-group/pokemon-egg-group/pokemon-egg-group.component';

describe('PokemonEggGroupComponent', () => {
  let component: PokemonEggGroupComponent;
  let fixture: ComponentFixture<PokemonEggGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonEggGroupComponent],
    });
    fixture = TestBed.createComponent(PokemonEggGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
