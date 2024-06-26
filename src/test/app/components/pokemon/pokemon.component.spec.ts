import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonComponent } from 'src/app/components/pokemon/pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonComponent],
    });
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
