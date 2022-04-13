import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceCalcComponent } from './science-calc.component';

describe('ScienceCalcComponent', () => {
  let component: ScienceCalcComponent;
  let fixture: ComponentFixture<ScienceCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
