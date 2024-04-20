import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilityComponent } from 'src/app/pages/ability/ability/ability.component';

describe('AbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbilityComponent],
    });
    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
