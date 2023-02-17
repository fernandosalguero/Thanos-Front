import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosMalDerivadosLiderComponent } from './casos-mal-derivados-lider.component';

describe('CasosMalDerivadosLiderComponent', () => {
  let component: CasosMalDerivadosLiderComponent;
  let fixture: ComponentFixture<CasosMalDerivadosLiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosMalDerivadosLiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosMalDerivadosLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
