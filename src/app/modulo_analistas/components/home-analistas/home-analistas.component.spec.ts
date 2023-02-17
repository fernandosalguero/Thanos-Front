import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnalistasComponent } from './home-analistas.component';

describe('HomeAnalistasComponent', () => {
  let component: HomeAnalistasComponent;
  let fixture: ComponentFixture<HomeAnalistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAnalistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAnalistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
