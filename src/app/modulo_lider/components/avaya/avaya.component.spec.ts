import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvayaComponent } from './avaya.component';

describe('AvayaComponent', () => {
  let component: AvayaComponent;
  let fixture: ComponentFixture<AvayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
