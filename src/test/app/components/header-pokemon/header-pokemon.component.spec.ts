import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderPokemonComponent } from 'src/app/components/header-pokemon/header-pokemon.component';

describe('HeaderPokemonComponent', () => {
  let component: HeaderPokemonComponent;
  let fixture: ComponentFixture<HeaderPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderPokemonComponent],
    });
    fixture = TestBed.createComponent(HeaderPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
