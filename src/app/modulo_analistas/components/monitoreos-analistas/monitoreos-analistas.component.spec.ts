import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreosAnalistasComponent } from './monitoreos-analistas.component';

describe('MonitoreosAnalistasComponent', () => {
  let component: MonitoreosAnalistasComponent;
  let fixture: ComponentFixture<MonitoreosAnalistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreosAnalistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoreosAnalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
