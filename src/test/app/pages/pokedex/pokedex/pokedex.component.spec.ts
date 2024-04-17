import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexComponent } from 'src/app/pages/pokedex/pokedex/pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokedexComponent],
    });
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
