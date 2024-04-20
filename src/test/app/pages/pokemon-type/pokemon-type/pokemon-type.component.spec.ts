import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeComponent } from 'src/app/pages/pokemon-type/pokemon-type/pokemon-type.component';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonTypeComponent],
    });
    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
